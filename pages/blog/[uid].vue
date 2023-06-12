<template>
  <ArticleView v-if="article" :article="article" />
</template>

<script setup lang="ts">
import { ArticleDocument } from '~/prismicio-types';

const { client } = usePrismic();
const route = useRoute();

const { data: article } = await useAsyncData(async () => {
  try {
    const article = await client.getByUID<ArticleDocument>('article', route.params.uid as string);
    return article;
  } catch {
    throw createError({ statusCode: 404, message: 'Page not found' });
  }
});

const meta = {
  title: () => `${article.value?.data.title} ― Guilherme Raduenz`,
  description: () => article.value?.data.subtitle,
  image: () => article.value?.data.featured_image?.url,
  twitter: '@graduenz',
};

useSeoMeta({
  title: meta.title,
  description: meta.description,
  twitterTitle: meta.title,
  twitterDescription: meta.description,
  twitterImage: meta.image,
  twitterCard: 'summary_large_image',
  twitterSite: meta.twitter,
  twitterCreator: meta.twitter,
  ogTitle: meta.title,
  ogDescription: meta.description,
  ogImage: meta.image,
  ogType: 'article',
});
</script>
