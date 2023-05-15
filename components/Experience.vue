<template>
  <div class="max-w-screen-xl mx-auto px-4 pb-0 md:pb-8">
    <h1
      id="experience"
      class="scroll-m-16 pb-8 pt-16 text-5xl md:text-6xl font-ls font-bold text-center whitespace-nowrap dark:text-white"
      >
      Experience
    </h1>
    <div class="md:w-[650px] px-1 md:px-0 flex flex-col justify-center mx-auto space-y-4">
        <Card
          v-for="exp in experiences"
          :toggling="exp.data.description && exp.data.description.length > 0"
          >
          <template #left>
            <img
              :src="exp.data.image.url"
              :alt="exp.data.company"
              class="rounded"
              />
          </template>
          <template #title>
            {{ exp.data.role }}
          </template>
          <template #subtitle>
            <p>
              {{ asDate(exp.data.since)?.toLocaleString('en-US', { month: 'short', year: 'numeric' }) }}
              to {{ asDate(exp.data.until)?.toLocaleString('en-US', { month: 'short', year: 'numeric' }) ?? 'present' }}
            </p>
            <p>
              {{ exp.data.company }} &horbar; {{ exp.data.location }}
            </p>
          </template>
          <template #content>
            <prismic-rich-text
              :field="exp.data.description"
              class="rich-text text-left flex flex-col"
              />
          </template>
        </Card>
    </div>
  </div>
</template>
    
<script setup lang="ts">
import { WorkExperienceDocument } from '~/prismicio-types';
import { asDate } from '@prismicio/helpers';

const { client } = usePrismic();

const { data: experiences } = await useAsyncData("work_experience", async () => {
  const experiences = await client.getAllByType<WorkExperienceDocument>("work_experience", {
    orderings: {
        field: 'my.work_experience.since',
        direction: 'desc',
    }
  });

  if (experiences) {
    return experiences;
  } else {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});
  </script>