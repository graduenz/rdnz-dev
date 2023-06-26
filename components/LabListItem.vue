<template>
  <div class="p-6 flex flex-col space-y-0 rounded-lg bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
    <div class="text-sm text-gray-500">
      {{ asDate(lab.data.date)?.toLocaleString('pt-BR', { timeZone: 'UTC', day: 'numeric', month: 'long', year: 'numeric' }) }}
    </div>
    <div class="text-xl font-bold dark:text-gray-100 tracking-tight">
      <a :href="lab.data.repository_url!">
        {{ lab.data.name }}
      </a>
    </div>
    <PrismicRichText
      :field="lab.data.description"
      class="prose dark:prose-invert text-gray-500"
    />
    <div class="pt-4">
      <GitHubButton
        :url="lab.data.repository_url!"
        size="sm"
      />
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
