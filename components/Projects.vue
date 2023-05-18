<template>
  <div class="max-w-screen-xl mx-auto px-4 pb-0 md:pb-8">
    <h1
      id="projects"
      class="scroll-m-16 pb-8 pt-16 text-5xl md:text-6xl font-ls font-bold text-center whitespace-nowrap dark:text-white"
      >
      Projects
    </h1>
    <div class="md:w-[650px] px-1 md:px-0 flex flex-col justify-center mx-auto space-y-4">
        <Card
          v-for="proj in projects"
          :toggling="proj.data.description && proj.data.description.length > 0"
          >
          <template #left>
            <img
              :src="proj.data.image.url"
              :alt="proj.data.name"
              class="rounded"
              />
          </template>
          <template #title>
            {{ proj.data.name }}
          </template>
          <template #subtitle>
            <p>
              {{ proj.data.type }}
            </p>
          </template>
          <template #content>
            <prismic-rich-text
              :field="proj.data.description"
              class="prose text-left flex flex-col"
              />
          </template>
          <template #links>
            <a
              v-if="proj.data.project_url"
              :href="proj.data.project_url"
                >
                <font-awesome-icon :icon="['fas', 'link']" />
            </a>
            <a
              v-if="proj.data.repository_url"
              :href="proj.data.repository_url"
                >
                <font-awesome-icon :icon="['fab', 'github']" />
            </a>
          </template>
        </Card>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ProjectDocument } from '~/prismicio-types';

const { client } = usePrismic();

const { data: projects } = await useAsyncData("project", async () => {
  const projects = await client.getAllByType<ProjectDocument>("project", {
    orderings: {
        field: 'my.project.name',
        direction: 'asc',
    }
  });

  if (projects) {
    return projects;
  } else {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});
</script>