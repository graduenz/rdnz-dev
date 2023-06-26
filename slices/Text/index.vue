<template>
  <div
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <PrismicRichText
      :field="slice.primary.text"
      class="prose prose-lg dark:prose-invert"
    />
  </div>
</template>

<script setup lang="ts">
import { Content } from '@prismicio/client';

defineProps(
  getSliceComponentProps<Content.TextSlice>([
    'slice',
    'index',
    'slices',
    'context',
  ]),
);
</script>
