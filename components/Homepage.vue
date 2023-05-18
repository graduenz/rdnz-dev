<template>
  <div class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl h-screen flex flex-col flex-wrap items-center justify-center mx-auto space-y-6 md:space-y-10 px-4 py-8">
      <img
        src="~/assets/img/memoji_laptop.png"
        alt="Me"
        class="h-auto w-32"
        />
      <span
        class="text-5xl md:text-6xl font-ls font-black whitespace-nowrap dark:text-gray-100"
        >
        {{ document?.data.title }}
      </span>
      <PrismicRichText
        :field="document?.data.introduction"
        class="prose prose-lg md:w-[450px] px-1 md:px-0 text-center dark:prose-invert"
        />
      <a
        @click="getStarted"
        class="cursor-pointer text-white drop-shadow-lg bg-mine hover:bg-mine-tonal font-bold rounded px-6 py-4"
        >
        {{ document?.data.scroll_button_text }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HomepageDocument } from '~/prismicio-types';

const { client } = usePrismic();

const { data: document } = await useAsyncData("homepage", async () => {
  const document = await client.getSingle<HomepageDocument>("homepage");

  if (document) {
    return document;
  } else {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});

const getStarted = () => {
  const el = window.document.getElementById('About');
  el?.scrollIntoView({ behavior: 'smooth' });
};
</script>