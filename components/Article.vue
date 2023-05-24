<template>
  <div
    class="max-w-screen-lg md:w-[750px] mx-auto mt-8 px-4 pb-0 md:pb-8">
    <div class="flex flex-col space-y-8">
      <div class="text-5xl md:text-6xl font-extrabold dark:text-gray-100">
        {{ article.data.title }}
      </div>
      <div class="flex flex-row text-gray-500 space-x-2 font-mono font-medium text-[15px]">
        <div class="flex flex-row space-x-2">
          <CalendarIcon class="w-5 h-5" />
          <span>
            {{ asDate(article.data.publish_date)?.toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) }}
          </span>
        </div>
        <div>
          &bull;
        </div>
        <div class="flex flex-row space-x-2">
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
      <div class="flex flex-col space-y-12">
        <SliceZone
          :slices="article.data.slices"
          :components="components"
          />
      </div>
    </div>
    <div class="mt-12">
      <ArticleComments />
    </div>
  </div>
</template>

<script setup lang="ts">
import { components } from '~/slices';
import { ArticleDocument } from '~/prismicio-types';
import { asDate } from '@prismicio/helpers';
import { CalendarIcon, TagIcon } from '@heroicons/vue/24/outline';

defineProps<{
  article: ArticleDocument,
}>();
</script>