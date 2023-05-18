<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <Card
      :toggling="slice.primary.description && slice.primary.description.length > 0"
      >
      <template #left>
        <img
          :src="slice.primary.image.url"
          :alt="slice.primary.company"
          class="rounded"
          />
      </template>
      <template #title>
        {{ slice.primary.role }}
      </template>
      <template #subtitle>
        <p>
          {{ asDate(slice.primary.since)?.toLocaleString('en-US', { month: 'short', year: 'numeric' }) }}
          to {{ asDate(slice.primary.until)?.toLocaleString('en-US', { month: 'short', year: 'numeric' }) ?? 'present' }}
        </p>
        <p>
          {{ slice.primary.company }} &horbar; {{ slice.primary.location }}
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
  getSliceComponentProps<Content.WorkExperienceSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>
