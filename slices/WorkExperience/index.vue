<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <SimpleCard>
      <template #left>
        <NuxtImg
          :src="slice.primary.image.url"
          :alt="slice.primary.company"
          width="64"
          height="64"
          class="rounded"
        />
      </template>
      <template #title>
        {{ slice.primary.role }}
      </template>
      <template #subtitle>
        <p v-if="isPastJob">
          De {{ asDate(slice.primary.since)?.toLocaleString('pt-BR', { month: 'long', year: 'numeric' }) }}
          a {{ asDate(slice.primary.until)?.toLocaleString('pt-BR', { month: 'long', year: 'numeric' }) ?? 'present' }}
        </p>
        <p v-else>
          Desde {{ asDate(slice.primary.since)?.toLocaleString('pt-BR', { month: 'long', year: 'numeric' }) }}
        </p>
        <p>
          {{ slice.primary.company }} &horbar; {{ slice.primary.location }}
        </p>
      </template>
    </SimpleCard>
  </section>
</template>

<script setup lang="ts">
import { Content } from '@prismicio/client';
import { asDate } from '@prismicio/helpers';

const props = defineProps(
  getSliceComponentProps<Content.WorkExperienceSlice>([
    'slice',
    'index',
    'slices',
    'context',
  ]),
);

const isPastJob = computed(() => !!props.slice.primary.until);
</script>
