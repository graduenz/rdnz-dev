<template>
  <div
    class="max-w-screen-xl md:w-[650px] mx-auto mt-8 px-4 pb-0 md:pb-8">
    <div class="flex flex-col space-y-8">
      <div class="text-5xl md:text-6xl font-bold dark:text-gray-100">
        <a :href="article.uid">
          {{ article.data.title }}
        </a>
      </div>
      <div class="flex flex-col text-gray-500 space-y-2">
        <div>
          <font-awesome-icon :icon="['far', 'calendar']" />
          <span class="ml-2">
            Published at
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
      <div class="flex flex-col space-y-4">
        <SliceZone
          :slices="article.data.slices"
          :components="components"
          />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { components } from '~/slices';
import { ArticleDocument } from '~/prismicio-types';
import { asDate } from '@prismicio/helpers';

defineProps<{
  article: ArticleDocument,
}>();
</script>