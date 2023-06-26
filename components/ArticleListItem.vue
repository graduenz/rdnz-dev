<template>
  <div class="p-6 flex flex-col space-y-2 rounded-lg bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
    <div class="aspect-square flex items-center">
      <a :href="`blog/${article.uid}`">
        <NuxtImg
          :src="article.data.featured_image.url || undefined"
          :alt="article.data.featured_image.alt || undefined"
          class="w-4/5 hover:w-5/6 mx-auto rounded-lg transition-all"
        />
      </a>
    </div>
    <div class="flex flex-row font-medium text-gray-500">
      {{ asDate(article.data.publish_date)?.toLocaleString('pt-BR', { timeZone: 'UTC', day: 'numeric', month: 'numeric', year: 'numeric' }) }}
      &horbar;
      {{ article.data.category }}
    </div>
    <div class="text-xl font-bold text-gray-800 dark:text-gray-200 tracking-tight">
      <a :href="`blog/${article.uid}`">
        {{ article.data.title }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { asDate } from '@prismicio/helpers';
import { ArticleDocument } from '~/prismicio-types';

defineProps<{
  article: ArticleDocument,
}>();
</script>
