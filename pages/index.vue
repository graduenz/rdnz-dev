<template>
  <div class="max-w-screen-lg flex flex-col space-y-4 mx-auto px-4 pt-12 md:pt-0">
    <PageTitle
      title="Blog"
      subtitle="A place where you can read about cool topics in software engineering."
    />
    <ArticleList />
  </div>
</template>

<script setup lang="ts">
const meta = {
  title: 'Blog ― Guilherme Raduenz',
  description: 'Guilherme Raduenz\'s personal blog',
  image: 'https://rdnz.dev/gr-og.png',
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
  ogType: 'website',
});
</script>
