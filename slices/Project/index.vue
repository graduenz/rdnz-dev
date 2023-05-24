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
          v-if="slice.primary.project_url"
          :href="slice.primary.project_url"
          class="pt-1"
          >
          <LinkIcon class="w-4 h-4" />
        </a>
        <a
          v-if="slice.primary.repository_url"
          :href="slice.primary.repository_url"
          >
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </template>
    </Card>
  </section>
</template>

<script setup lang="ts">
import { Content } from "@prismicio/client";
import { LinkIcon } from '@heroicons/vue/24/outline';

defineProps(
  getSliceComponentProps<Content.ProjectSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>
