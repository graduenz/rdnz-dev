<template>
  <div class="max-w-screen-lg md:w-[48rem] mx-auto mt-12 md:mt-8 px-4 pb-0 md:pb-8">
    <div class="flex flex-col space-y-12">
      <div class="flex flex-col items-center space-y-1">
        <div>
          <NuxtImg
            :src="asImageSrc(article.data.featured_image, { auto: undefined }) || undefined"
            :alt="article.data.featured_image.alt || undefined"
            :width="article.data.featured_image.dimensions?.width"
            :height="article.data.featured_image.dimensions?.height"
            class="rounded"
          />
        </div>
      </div>
      <div class="font-medium text-lg text-gray-500 mx-auto">
        {{ asDate(article.data.publish_date)?.toLocaleString('pt-BR', { timeZone: 'UTC', day: 'numeric', month: 'numeric', year: 'numeric' }) }}
        &horbar;
        {{ article.data.category }}
      </div>
      <div class="text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-gray-200 text-center tracking-tight">
        {{ article.data.title }}
      </div>
      <div class="prose prose-lg dark:prose-invert text-gray-500 text-center">
        {{ article.data.subtitle }}
      </div>
      <div
        v-if="hasLab"
        class="text-center"
      >
        <GitHubButton :url="lab?.data.repository_url!" />
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
import { FilledLinkToDocumentField } from '@prismicio/types';
import { components } from '~/slices';
import { ArticleDocument, LabDocument } from '~/prismicio-types';

const props = defineProps<{
  article: ArticleDocument,
}>();

const hasLab = computed(() => !!(props.article.data.lab as FilledLinkToDocumentField).id);

const { client } = usePrismic();

const { data: lab } = await useAsyncData(async () => {
  if (!hasLab) {
    return undefined;
  }

  const id = (props.article.data.lab as FilledLinkToDocumentField).id;
  return await client.getByID<LabDocument>(id);
});
</script>
