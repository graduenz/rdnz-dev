<template>
  <div class="pt-12 flex flex-col space-y-8">
    <ArticleListItem
      v-for="article in documents"
      :key="article.uid"
      :article="article"
    />
  </div>
</template>

<script setup lang="ts">
import { ArticleDocument } from '~/prismicio-types';

const { client } = usePrismic();

const { data: documents } = await useAsyncData('article', async () => {
  const documents = await client.getAllByType<ArticleDocument>('article', {
    orderings: {
      field: 'my.article.publish_date',
      direction: 'desc',
    },
  });

  return documents;
});
</script>
