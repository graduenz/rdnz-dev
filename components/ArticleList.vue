<template>
  <div
    class="max-w-screen-lg flex flex-col space-y-4 mx-auto px-4 pt-12 md:pt-0">
    <h1 class="scroll-m-16 text-5xl font-black whitespace-nowrap dark:text-gray-100">
      Blog
    </h1>
    <h2 class="text-gray-500 text-lg">
      A place where you can read about cool topics in software engineering.
    </h2>
    <div class="pt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
      <ArticleListItem
        v-for="article in documents"
        :key="article.uid"
        :article="article"
        />
    </div>
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