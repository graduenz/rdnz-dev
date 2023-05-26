<template>
  <div class="p-6 flex flex-col space-y-2 rounded-lg bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
    <div class="aspect-square flex items-center">
      <a :href="`blog/${article.uid}`">
        <NuxtImg
          :src="article.data.featured_image.url"
          :alt="article.data.featured_image.alt"
          class="w-4/5 hover:w-5/6 mx-auto rounded-lg transition-all"
          />
      </a>
    </div>
    <div class="flex flex-row text-sm font-mono font-medium text-gray-500">
      {{ asDate(article.data.publish_date)?.toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) }}
    </div>
    <div class="text-2xl font-bold dark:text-gray-100">
      <a :href="`blog/${article.uid}`">
        {{ article.data.title }}
      </a>
    </div>
    <div class="flex flex-row text-sm font-mono font-medium text-gray-500">
      {{ article.data.category }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArticleDocument } from '~/prismicio-types';
import { asDate } from '@prismicio/helpers';

defineProps<{
  article: ArticleDocument,
}>();
</script>