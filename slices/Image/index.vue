<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="flex flex-col items-center space-y-1">
      <div>
        <NuxtImg
          :src="slice.primary.image.url"
          :alt="slice.primary.image.alt"
          :width="slice.primary.image.dimensions?.width"
          :height="slice.primary.image.dimensions?.height"
          class="rounded"
        />
      </div>
      <div class="prose prose-sm dark:prose-invert italic">
        {{ slice.primary.caption }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Content } from "@prismicio/client";

// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ImageSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>
