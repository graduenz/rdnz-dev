<template>
  <div class="flex flex-col space-y-1">
    <div class="text-xl font-bold dark:text-gray-100">
      <a :href="`blog/${article.uid}`">
        {{ article.data.title }}
      </a>
    </div>
    <div class="flex flex-row space-x-2 font-mono text-gray-500 text-sm">
      <CalendarIcon class="w-5 h-5" />
      <span>
        {{ asDate(article.data.publish_date)?.toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) }}
      </span>
    </div>
    <div
      v-if="article.tags && article.tags.length > 0"
      class="flex flex-row space-x-2 font-mono text-gray-500 text-sm"
      >
      <TagIcon class="w-5 h-5" />
      <span class="ml-2">
        <template
          v-for="(tag, index) in article.tags"
          :key="tag">
          {{ index === 0 ? '' : ', ' }}
          {{ tag }}
        </template>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArticleDocument } from '~/prismicio-types';
import { asDate } from '@prismicio/helpers';
import { CalendarIcon, TagIcon } from '@heroicons/vue/24/outline';

defineProps<{
  article: ArticleDocument,
}>();
</script>