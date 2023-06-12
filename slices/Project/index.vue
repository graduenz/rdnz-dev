<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <SimpleCard
      :toggling="slice.primary.description && slice.primary.description.length > 0"
    >
      <template #left>
        <NuxtImg
          :src="slice.primary.image.url"
          :alt="slice.primary.name"
          width="64"
          height="64"
          class="rounded"
        />
      </template>
      <template #title>
        {{ slice.primary.name }}
      </template>
      <template #subtitle>
        <p>
          {{ slice.primary.type }}
        </p>
      </template>
      <template #content>
        <PrismicRichText
          :field="slice.primary.description"
          class="prose dark:prose-invert"
        />
      </template>
      <template #links>
        <a
          v-if="slice.primary.repository_url"
          :href="slice.primary.repository_url"
          class="py-2 px-3 rounded-3xl font-medium text-sm text-white dark:text-black bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 transition-all"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
          <span class="ml-2">See in GitHub</span>
        </a>
      </template>
    </SimpleCard>
  </section>
</template>

<script setup lang="ts">
import { Content } from '@prismicio/client';

defineProps(
  getSliceComponentProps<Content.ProjectSlice>([
    'slice',
    'index',
    'slices',
    'context',
  ]),
);
</script>
