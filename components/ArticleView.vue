<template>
  <div class="max-w-screen-lg md:w-[48rem] mx-auto mt-12 md:mt-8 px-4 pb-0 md:pb-8">
    <div class="flex flex-col space-y-4">
      <div class="text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-gray-200 tracking-tight">
        {{ article.data.title }}
      </div>
      <div class="prose prose-lg dark:prose-invert text-gray-500">
        {{ article.data.subtitle }}
      </div>
      <div class="py-4 pb-8 flex flex-row space-x-4 border-b dark:border-gray-800">
        <div>
          <img
            src="/me.jpg"
            alt="Guilherme Raduenz"
            class="h-auto w-14 rounded-full"
          >
        </div>
        <div class="grow flex flex-col">
          <div class="font-medium text-lg dark:text-gray-100">
            Guilherme Raduenz
          </div>
          <div class="text-gray-500">
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
      <div
        v-if="hasLab"
        class="p-6 flex flex-col space-y-4 bg-gray-200 dark:bg-gray-800 rounded-3xl"
      >
        <p class="prose dark:prose-invert">
          <b>Importante!</b> Há um <a href="/labs">lab</a> vinculado ao post que você está lendo.
        </p>
        <div>
          <GitHubButton
            :url="lab?.data.repository_url!"
            label="Acesse o repositório no GitHub"
            size="sm"
          />
        </div>
      </div>
      <div class="py-4 flex flex-col space-y-12">
        <SliceZone
          :slices="article.data.slices"
          :components="components"
        />
      </div>
      <div
        v-if="hasLab"
        class="p-6 flex flex-col space-y-4 bg-gray-200 dark:bg-gray-800 rounded-3xl"
      >
        <p class="prose dark:prose-invert">
          <b>Apenas lembrando:</b> há um <a href="/labs">lab</a> vinculado ao post que você leu.
        </p>
        <div>
          <GitHubButton
            :url="lab?.data.repository_url!"
            label="Acesse o repositório no GitHub"
            size="sm"
          />
        </div>
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
