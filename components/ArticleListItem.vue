<template>
  <div class="flex flex-col space-y-8 md:space-y-0">
    <a
      :href="`blog/${article.uid}`"
      class="block md:hidden shrink-0"
    >
      <NuxtImg
        :src="article.data.featured_image.url || undefined"
        :alt="article.data.featured_image.alt || undefined"
        class="w-full mx-auto rounded-3xl"
      />
    </a>
    <div class="pb-8 flex flex-row space-x-4 border-b dark:border-gray-800">
      <div class="grow flex flex-col space-y-1">
        <div class="text-sm text-gray-500">
          {{ asDate(article.data.publish_date)?.toLocaleString('pt-BR', { timeZone: 'UTC', day: 'numeric', month: 'long', year: 'numeric' }) }}
          &middot;
          {{ article.data.category }}
        </div>
        <div class="text-xl font-bold text-gray-800 dark:text-gray-200 tracking-tight">
          <a :href="`blog/${article.uid}`">
            {{ article.data.title }}
          </a>
        </div>
        <div class="text-gray-500">
          {{ article.data.subtitle }}
        </div>
      </div>
      <a
        :href="`blog/${article.uid}`"
        class="hidden md:block shrink-0"
      >
        <NuxtImg
          :src="article.data.featured_image.url || undefined"
          :alt="article.data.featured_image.alt || undefined"
          class="w-32 mx-auto rounded-lg"
        />
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
