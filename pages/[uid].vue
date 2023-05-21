<template>
  <Head>
    <Title>{{ article?.data.title }} &horbar; Guilherme Raduenz</Title>
  </Head>
  <Article v-if="article" :article="article" />
</template>

<script setup lang="ts">
import { ArticleDocument } from '~/prismicio-types';

const { client } = usePrismic();
const route = useRoute();

const { data: article } = await useAsyncData(async () => {
  try {
    const article = await client.getByUID<ArticleDocument>("article", route.params.uid as string);
    return article;
  }
  catch {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});
</script>