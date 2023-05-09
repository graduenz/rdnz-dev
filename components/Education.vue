<template>
  <div class="pb-8">
    <div class="max-w-screen-xl mx-auto px-4 py-8">
      <h1
        id="education"
        class="scroll-m-16 pb-8 pt-16 text-4xl md:text-6xl font-ls font-bold text-center whitespace-nowrap dark:text-white"
        >
        Education
      </h1>
      <div class="md:w-[650px] px-1 md:px-0 flex flex-col justify-center mx-auto space-y-4">
          <Card
            v-for="ed in education"
            :toggling="ed.data.description && ed.data.description.length > 0"
            >
            <template #left>
              <img
                :src="ed.data.image.url"
                :alt="ed.data.name"
                class="rounded"
                />
            </template>
            <template #title>
              {{ ed.data.name }}
            </template>
            <template #subtitle>
              <p>
                {{ ed.data.degree }} &horbar; {{ ed.data.school }}
              </p>
              <p>
                From {{ asDate(ed.data.since)?.toLocaleString('en-US', { month: 'short', year: 'numeric' }) }}
              </p>
            </template>
            <template #content>
              <prismic-rich-text
                :field="ed.data.description"
                class="rich-text text-left flex flex-col"
                />
            </template>
          </Card>
      </div>
    </div>
  </div>
  </template>
  
<script setup lang="ts">
import { EducationDocument } from '~/prismicio-types';
import { asDate } from '@prismicio/helpers';

const { client } = usePrismic();

const { data: education } = await useAsyncData("education", async () => {
  const education = await client.getAllByType<EducationDocument>("education", {
    orderings: {
        field: 'my.education.since',
        direction: 'desc',
    }
  });

  if (education) {
    return education;
  } else {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});
</script>