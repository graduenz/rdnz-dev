<template>
  <div class="max-w-screen-lg md:w-[48rem] mx-auto mt-12 md:mt-8 px-4 pb-0 md:pb-8">
    <div class="flex flex-col space-y-4">
      <div class="text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-gray-200 tracking-tight">
        {{ article.data.title }}
      </div>
      <div class="prose prose-lg dark:prose-invert text-gray-500">
        {{ article.data.subtitle }}
      </div>
      <div class="py-4 pb-8 flex flex-row space-x-3 border-b dark:border-gray-800">
        <div>
          <img
            src="/me.jpg"
            alt="Guilherme Raduenz"
            class="h-auto w-12 rounded-full"
          >
        </div>
        <div class="flex flex-col space-y-0.5">
          <div class="font-medium dark:text-gray-100">
            Guilherme Raduenz
          </div>
          <div class="text-sm text-gray-500">
            {{ asDate(article.data.publish_date)?.toLocaleString('pt-BR', { timeZone: 'UTC', day: 'numeric', month: 'long', year: 'numeric' }) }}
            &middot;
            {{ article.data.category }}
          </div>
        </div>
      </div>
      <div class="py-8 flex flex-col items-center space-y-1">
        <div>
          <NuxtImg
            :src="asImageSrc(article.data.featured_image, { auto: undefined }) || undefined"
            :alt="article.data.featured_image.alt || undefined"
            :width="article.data.featured_image.dimensions?.width"
            :height="article.data.featured_image.dimensions?.height"
            class="rounded-3xl"
          />
        </div>
      </div>
      <div class="flex flex-col space-y-12">
        <SliceZone
          :slices="article.data.slices"
          :components="components"
        />
      </div>
      <div class="py-12 text-center">
        <GitHubButton
          :url="lab?.data.repository_url!"
          label="Ver código fonte no GitHub"
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
