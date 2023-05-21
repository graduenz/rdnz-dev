<template>
  <div class="flex flex-col space-y-1">
    <div class="text-lg font-bold dark:text-gray-100">
      <a :href="article.uid">
        {{ article.data.title }}
      </a>
    </div>
    <div class="flex flex-row text-gray-500 space-x-4">
      <div>
        <font-awesome-icon :icon="['far', 'calendar']" />
        <span class="ml-2">
          {{ asDate(article.data.publish_date)?.toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) }}
        </span>
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'tags']" />
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
  </div>
</template>

<script setup lang="ts">
import { ArticleDocument } from '~/prismicio-types';
import { asDate } from '@prismicio/helpers';

defineProps<{
  article: ArticleDocument,
}>();
</script>