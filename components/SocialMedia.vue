<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="flex flex-row space-x-3 items-center justify-center mx-auto">
    <a
      v-for="s in document?.data.social"
      :key="s.name!"
      :href="s.url!"
      :title="s.name!"
    >
      <div
        class="w-5 h-5 fill-gray-500 hover:fill-black dark:hover:fill-white transition-all"
        v-html="icons[s.icon].svg"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import * as icons from 'simple-icons';
import { SettingsDocument } from '~/prismicio-types';

const { client } = usePrismic();

const { data: document } = await useAsyncData('settings', async () => {
  const documents = await client.getAllByType<SettingsDocument>('settings');

  if (documents && documents.length > 0) {
    return documents[0];
  } else {
    throw createError({ statusCode: 404, message: 'Page not found' });
  }
});
</script>
