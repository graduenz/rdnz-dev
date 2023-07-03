<template>
  <div class="max-w-screen-lg flex flex-col space-y-4 mx-auto px-4 pt-12 md:pt-0">
    <PageTitle
      title="Contato"
      :subtitle="meta.description"
    />
    <ContactDetails />
  </div>
</template>

<script setup lang="ts">
const meta = {
  title: 'Contato ― Guilherme Raduenz',
  description: 'Fale comigo através das opções abaixo.',
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
