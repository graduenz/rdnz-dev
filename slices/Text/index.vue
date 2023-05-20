<template>
  <div
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <PrismicRichText
      :field="slice.primary.text"
      class="prose prose-lg text-justify dark:prose-invert"
      />
  </div>
</template>

<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TextSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>
