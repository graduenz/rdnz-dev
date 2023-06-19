<template>
  <div class="mx-auto mt-8 py-16 px-2 border-t dark:border-gray-800">
    <div class="max-w-screen-lg flex flex-col md:flex-row text-center md:text-left space-y-4 md:space-y-0 mx-auto">
      <div class="grow">
        <p class="prose dark:prose-invert font-semibold">
          Guilherme Raduenz
          &copy;
          {{ new Date().getUTCFullYear() }}
        </p>
        <p class="prose text-sm dark:prose-invert">
          Todos os direitos reservados.
        </p>
      </div>
      <SocialMedia />
    </div>
  </div>
</template>
