<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <SimpleCard>
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
          {{ slice.primary.degree }} &horbar; {{ slice.primary.school }}
        </p>
        <p>
          Desde {{ asDate(slice.primary.since)?.toLocaleString('pt-BR', { month: 'long', year: 'numeric' }) }}
        </p>
      </template>
    </SimpleCard>
  </section>
</template>

<script setup lang="ts">
import { Content } from '@prismicio/client';
import { asDate } from '@prismicio/helpers';

defineProps(
  getSliceComponentProps<Content.EducationSlice>([
    'slice',
    'index',
    'slices',
    'context',
  ]),
);
</script>
