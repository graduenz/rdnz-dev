<template>
  <div
    class="max-w-screen-lg md:w-[650px] flex flex-col space-y-8 mx-auto px-4 pb-0 md:pb-8">
    <h1
      class="scroll-m-16 pt-8 text-5xl font-extrabold whitespace-nowrap dark:text-gray-100"
      >
      Blog
    </h1>
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

const { data: documents } = await useAsyncData("article", async () => {
  const documents = await client.getAllByType<ArticleDocument>("article", {
    orderings: {
      field: "my.article.publish_date",
      direction: "desc",
    },
  });

  return documents;
});
</script>