<template>
  <div class="bg-white pb-8">
    <div class="max-w-screen-xl mx-auto px-4 pb-8">
      <h1
        id="about"
        class="scroll-m-16 pb-8 pt-16 text-5xl md:text-6xl font-ls font-bold text-center whitespace-nowrap dark:text-white"
        >
        {{ document?.data.title }}
      </h1>
      <prismic-rich-text
        :field="document?.data.content"
        class="prose md:prose-lg text-justify text-lg md:w-[650px] px-1 md:px-0 flex flex-col justify-center mx-auto space-y-8"
        />
    </div>
  </div>
  </template>
  
  <script setup lang="ts">
  import { AboutPageDocument } from '~/prismicio-types';
  
  const { client } = usePrismic();
  
  const { data: document } = await useAsyncData("about_page", async () => {
    const document = await client.getSingle<AboutPageDocument>("about_page");
  
    if (document) {
      return document;
    } else {
      throw createError({ statusCode: 404, message: "Page not found" });
    }
  });
  </script>