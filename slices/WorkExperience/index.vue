<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    Placeholder component for work_experience (variation: {{ slice.variation }})
    Slices
  </section>
</template>

<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.WorkExperienceSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>
