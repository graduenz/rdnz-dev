<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <Card
      :toggling="slice.primary.description && slice.primary.description.length > 0"
      >
      <template #left>
        <NuxtImg
          :src="slice.primary.image.url"
          :alt="slice.primary.name"
          class="rounded"
          />
      </template>
      <template #title>
        {{ slice.primary.name }}
      </template>
      <template #subtitle>
        <p>
          {{ slice.primary.degree }} &horbar; {{ slice.primary.school }}
        </p>
        <p>
          From {{ asDate(slice.primary.since)?.toLocaleString('en-US', { month: 'short', year: 'numeric' }) }}
        </p>
      </template>
      <template #content>
        <PrismicRichText
          :field="slice.primary.description"
          class="prose dark:prose-invert"
          />
      </template>
    </Card>
  </section>
</template>

<script setup lang="ts">
import { Content } from "@prismicio/client";
import { asDate } from '@prismicio/helpers';

defineProps(
  getSliceComponentProps<Content.EducationSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>
