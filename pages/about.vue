<template>
  <div>
    <SectionView name="About" />
    <SectionView name="Experience" />
    <SectionView name="Education" />
  </div>
</template>

<script setup lang="ts">
const meta = {
  title: 'About ― Guilherme Raduenz',
  description: 'Guilherme Raduenz\'s about page',
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
