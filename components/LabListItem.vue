<template>
  <div class="p-6 flex flex-col space-y-2 rounded-lg bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
    <div class="flex flex-row text-sm font-mono font-medium text-gray-500">
      {{ asDate(lab.data.date)?.toLocaleString('en-US', { timeZone: 'UTC', day: 'numeric', month: 'short', year: 'numeric' }) }}
    </div>
    <div class="text-2xl font-bold dark:text-gray-100">
      <a :href="lab.data.repository_url">
        {{ lab.data.name }}
      </a>
    </div>
    <PrismicRichText
      :field="lab.data.description"
      class="prose prose-sm dark:prose-invert text-gray-500"
    />
    <div class="pt-2">
      <a
        class="py-1 px-2 rounded-3xl font-medium text-white dark:text-black bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 transition-all"
        title="See in GitHub"
        :href="lab.data.repository_url"
      >
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { asDate } from '@prismicio/helpers';
import { LabDocument } from '~/prismicio-types';

defineProps<{
  lab: LabDocument,
}>();
</script>
