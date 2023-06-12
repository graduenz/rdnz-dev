<template>
  <div class="max-w-screen-lg md:w-[48rem] mx-auto mt-12 md:mt-8 px-4 pb-0 md:pb-8">
    <div class="flex flex-col space-y-12">
      <div class="flex flex-col items-center space-y-1">
        <div>
          <NuxtImg
            :src="asImageSrc(article.data.featured_image, { auto: undefined })"
            :alt="article.data.featured_image.alt"
            :width="article.data.featured_image.dimensions?.width"
            :height="article.data.featured_image.dimensions?.height"
            class="rounded"
          />
        </div>
      </div>
      <div class="flex flex-row space-x-2 font-mono font-medium text-gray-500 mx-auto">
        <span>
          {{ asDate(article.data.publish_date)?.toLocaleString('en-US', { timeZone: 'UTC', day: 'numeric', month: 'long', year: 'numeric' }) }}
          &horbar;
          {{ article.data.category }}
        </span>
      </div>
      <div class="text-5xl font-extrabold dark:text-gray-100 text-center">
        {{ article.data.title }}
      </div>
      <div class="prose prose-lg dark:prose-invert text-gray-500 text-center">
        {{ article.data.subtitle }}
      </div>
      <div class="flex flex-col space-y-12">
        <SliceZone
          :slices="article.data.slices"
          :components="components"
        />
      </div>
      <div>
        <ArticleComments />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { asDate, asImageSrc } from '@prismicio/helpers';
import { components } from '~/slices';
import { ArticleDocument } from '~/prismicio-types';

defineProps<{
  article: ArticleDocument,
}>();
</script>
