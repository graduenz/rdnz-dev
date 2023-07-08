---
description: Testing ASP.NET Core Web APIs efficiently
---

# ASP.NET Core Integration Tests

{% hint style="info" %}
Repository for this page: [https://github.com/graduenz/whoof-aspnetcore](https://github.com/graduenz/whoof-aspnetcore).
{% endhint %}

## Introduction

Testing has a huge impact on software development by helping to prevent bugs and ensure the quality of changes in the long term. Good tests, once written, make sure that you didn't break anything existing with your code.

When mentoring junior developers, if they ask me for advice on how to become better, one thing I always recommend is to learn unit testing, understand and get familiar with the test framework, understand test writing practices, and understand what makes a test good. And! Review pull requests from senior developers; they are expected to write good tests, and you can learn from them.

As well as monitoring and observability, good testing ensures that after your code is delivered and used, it's working properly, without requiring explicit user feedback.

## Requirements

It would be good if you're already familiar with Docker and Docker Compose and know what containers are, what those tools do, and what a `docker-compose.yml` file is. If that's not your case, no worries; just go ahead!

If you're a Linux or Mac user, you can install it using the official Docker documentation.

If you are a Windows user, I recommend you install WSL2 first, then go to the Docker documentation and install Docker Desktop. Links:

* [How to install WSL2 on Windows 10 and Windows 11 | Windows Central](https://www.windowscentral.com/how-install-wsl2-windows-10)
* [Install Docker Desktop on Windows | Docker Documentation](https://docs.docker.com/desktop/install/windows-install/)

## Sample ASP.NET Core project

We are going to use [whoof-aspnetcore](https://github.com/graduenz/whoof-aspnetcore) as the project to be tested, a simple implementation of a pet vaccination REST API. Please [open the project in github.dev](https://github.dev/graduenz/whoof-aspnetcore/) and take a quick look at the project structure, you will see that we have the following folders:

* **Entities** containing EF Core entities;
* **Persistence** with persistence objects (EF Core DbContext);
* **Controllers** with the Web API controllers;
* **Models** with common models used alongside API contracts;
* **Validators** with validation implementations using FluentValidation.

The `BaseCrudController` class is a generic base class for every controller containing some premade CRUD endpoints, which are the endpoints that we will test in our test project:

```
GET    /v1/pets
GET    /v1/pets/{id}
POST   /v1/pets
PUT    /v1/pets/{id}
DELETE /v1/pets/{id}
```

## Testing

Before we start with the test project, let's list some important points:

* We will use xUnit as the test framework;
* We will not write unit tests; we will go straight to integration tests;
* API tests will be real HTTP calls using an `HttpClient`;
* We will deploy every API dependency using Docker Compose, in this case, it's only a PostgreSQL instance as the database;
  * If we had more dependencies like Redis or Elasticsearch, we should do the same;
  * We could make use of mocks, but that would be the case for unit testing - for integration tests, we want the test environment as close as possible to the production environment;
* Each test will generate an exclusive database, run the test and delete it after test execution.

### **Docker Compose**

We need a `docker-compose.yml` file at the repository's root, containing all dependencies for our project. In this case, only a PostgreSQL instance is enough, like the one present in our project.

```yaml
version: "3.8"

services:

  postgres:
    image: postgres
    ports:
      - 5432:5432
    environment:
      - POSTGRES_PASSWORD=whoof
    volumes:
      - postgres-data:/var/lib/postgresql/data

volumes:
  postgres-data:
```

Now, make use of the following commands to start your services, or to shut down.

```bash
# Start services
docker-compose up -d

# Shut down services
docker-compose down
```

It is also great for debugging. Instead of installing every dependency on your computer and running the project, you can leave it to Docker Compose.

### Connection string

Next step after we have our `docker-compose.yml` file ready is to set the connection string in both API and test project `appsettings.json` file, like the example below:

```diff
{
+    "ConnectionStrings": {
+        "AppDbContext": "User ID=postgres;Password=whoof;Server=localhost;Port=5432;Database=whoof;Integrated Security=true;Pooling=true;Include Error Detail=true;"
+    },
    "Logging": {
        "LogLevel": {
            "Default": "Debug",
            "System": "Information",
            "Microsoft": "Information"
        }
    }
}
```

Please note the connection string name is AppDbContext. In your application, where EF Core is configured, set that named connection string as well.

```csharp
// <IServiceCollection reference>
.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(configuration.GetConnectionString("AppDbContext"))
)
```

{% hint style="info" %}
**Npgsql** is the .NET provider for PostgreSQL. If you use another database provider, please use its specific package and method.
{% endhint %}

### WebApplicationFactory

`WebApplicationFactory` is a class in `Microsoft.AspNetCore.Mvc.Testing` package that enables us to create a real application to be used for testing. We can either use it directly in our tests or create an implementation by inheriting it with our own configuration. I prefer to create another class and do some config, like the example below, which is present in the project:

```csharp
public class TestWebApplicationFactory<TProgram>
    : WebApplicationFactory<TProgram> where TProgram : class
{
    private readonly string _exclusiveDbName;

    public TestWebApplicationFactory(string exclusiveDbName)
    {
        _exclusiveDbName = exclusiveDbName;
    }
    
    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        var configuration = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json")
            .AddEnvironmentVariables()
            .Build();

        builder.UseConfiguration(configuration);
        
        builder.ConfigureServices(services =>
        {
            ReplaceDbConnectionString(services, configuration);
        });

        builder.UseEnvironment("Development");
    }

    private void ReplaceDbConnectionString(IServiceCollection services, IConfiguration configuration)
    {
        var dbContextDescriptor = services.Single(
            d => d.ServiceType ==
                 typeof(DbContextOptions<AppDbContext>));

        services.Remove(dbContextDescriptor);

        var connstrBuilder = new DbConnectionStringBuilder();
        connstrBuilder.ConnectionString = configuration["ConnectionStrings:AppDbContext"];
        connstrBuilder["Database"] = _exclusiveDbName;
        
        services.AddDbContext<AppDbContext>(options =>
            options.UseNpgsql(connstrBuilder.ConnectionString)
        );
    }
}
```

Some considerations:

* A generic `TProgram` is used in the class, which is the application to be run - in this case, the Whoof.Api project;
* In the constructor, it receives a string that is the exclusive database name for the test being executed (requirement described above);
* In the `ConfigureWebHost` method override, we read the application settings file, then replace the connection string by changing the database name to the one received in the constructor;

### Base test class

Another thing that will help us write integration tests is to have a base class with everything that is required in testing, since creating the test database, loading predefined data into it, doing dependency resolution, and removing the database after the test is run. Take a look at the example that is used in the project:

```csharp
public abstract class BaseControllerTests : IDisposable
{
    protected BaseControllerTests()
    {
        ExclusiveDbName = $"whoof_{Guid.NewGuid()}";
        TestWebApplicationFactory<Program> factory = new(ExclusiveDbName);
        
        HttpClient = factory.CreateClient();
        ServiceScope = factory.Services.CreateScope();
        DbContext = ServiceScope.ServiceProvider.GetRequiredService<AppDbContext>();
        
        InitializeDatabase();
    }

    private void InitializeDatabase()
    {
        DbContext.Database.EnsureDeleted();
        DbContext.Database.EnsureCreated();
        PreloadedData.Load(DbContext);
    }

    private void TeardownDatabase()
    {
        DbContext.Database.EnsureDeleted();
    }

    public string ExclusiveDbName { get; }
    protected HttpClient HttpClient { get; }
    protected IServiceScope ServiceScope { get; }
    protected AppDbContext DbContext { get; }
    protected IServiceProvider ServiceProvider => ServiceScope.ServiceProvider;

    protected virtual void Dispose(bool disposing)
    {
        if (disposing)
        {
            TeardownDatabase();
            HttpClient.Dispose();
            ServiceScope.Dispose();
        }
    }

    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }
}
```

Some considerations:

* In the constructor, we generate the exclusive database name for the test, we create an instance of the web application factory and create the `HttpClient` from it, as well as we set the `IServiceScope` to resolve other required dependencies;
* In `Dipose` method, when the test ends, we make sure the database is removed and we also dispose of all our class dependencies (take note it must implement `IDisposable`).

### Patterns

With both classes above created, we can now start writing tests. Before going into it, let's quickly introduce some matters about test patterns.

#### Naming convention

To easily know what a test should do and expect, it's important to define a naming convention for the project. In this project, the following naming is used: `MethodName_StateInTest_ExpectedResult`. Take a look at some examples:

* `AddOneAsync_WithInvalidData_DoesntAdd`: makes sure `AddOneAsync` really doesn't add anything when data is invalid;
* `UpdateOneAsync_WithValidData_UpdatesAsExpected`: makes sure `UpdateOneAsync` really updates the entity when data is valid;

#### AAA pattern

The AAA pattern is common in test implementation and it is about the test method structure, expecting three steps: (A)rrange, (A)ct, and (A)ssert.

* Arrange is a step to, literally, arrange the test scenario, define values in variables, modify data, setup mocks, etc.;
* Act is, ideally, one single line of code doing the test action, like calling the method of the class being tested;
* Assert is a step to ensure the results are the same as we expect, verifying the returned value from the method called, the presence or absence of errors, the returned HTTP status code, and more.

#### FluentAssertions

`FluentAssertions` is a NuGet package available to write better assertions in the Assert section of our tests, making them easier to write and read.

### Test method

To see everything in place, let's see an example of a test method. Note the base class usage, the naming convention, the AAA pattern, and the usage of FluentAssertions in the end.

```csharp
public class PetsControllerTests : BaseControllerTests
{
    [Fact]
    public async Task GetOneAsync_WhenPetExists_ReturnsAsExpected()
    {
        // Arrange
        var expectedPet = DbContext.Pets.First();
        
        // Act
        var actualPet = await HttpClient.GetFromJsonAsync<Pet>(
            $"/v1/pets/{expectedPet.Id}"
        );
        
        // Assert
        actualPet.Should()
            .NotBeNull().And
            .BeEquivalentTo(expectedPet, c => c
                .Excluding(m => m.Vaccinations));
    }
}
```

This test method makes sure the `GetOneAsync` method returns a pet when it exists in the database. We get an arbitrary pet from the database, make the HTTP request to the API, then parse the returned JSON to the model that the API returns, and then we finally assert that the pet is the same that we asked for, except for some fields that aren't returned.

### More tests

You can take a look at the entire `PetsControllerTests` class in the repository shown below, which has tests for most of the use cases of the Pets API (all methods with valid data, invalid data, nonexistent IDs, etc.).

{% @github-files/github-code-block url="https://github.com/graduenz/whoof-aspnetcore/blob/main/tests/Whoof.Tests/Api/PetsControllerTests.cs" %}

## Practice

If you want to practice, I encourage you to fork the repository and implement the missing tests for the other controllers present in the API project.
