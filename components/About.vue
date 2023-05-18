<template>
  <div class="bg-white pb-8">
    <div class="max-w-screen-xl w-[650px] mx-auto px-4 pb-8">
      <h1
        id="about"
        class="scroll-m-16 pb-8 pt-16 text-5xl md:text-6xl font-ls font-bold text-center whitespace-nowrap dark:text-white"
        >
        {{ document?.data.name }}
      </h1>
      <SliceZone
        :slices="document?.data.slices"
        :components="components"
        class="text-justify"
        />
    </div>
  </div>
  </template>
  
  <script setup lang="ts">
  import { components } from '~/slices';
  import { SectionDocument } from '~/prismicio-types';
  
  const { client } = usePrismic();
  
  const { data: document } = await useAsyncData("about", async () => {
    const documents = await client.getByType<SectionDocument>("section", {
      predicates: [
        '[at(my.section.name, "About")]'
      ]
    });
  
    if (documents && documents.results_size > 0) {
      return documents.results[0];
    } else {
      throw createError({ statusCode: 404, message: "Page not found" });
    }
  });
  </script>