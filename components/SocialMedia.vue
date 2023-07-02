<template>
  <div class="flex flex-row space-x-4 items-center justify-center mx-auto text-xl text-gray-500">
    <a
      v-for="s in document?.data.social"
      :key="s.name!"
      :href="s.url!"
      :title="s.name!"
      class="hover:text-black dark:hover:text-white transition-all"
    >
      <font-awesome-icon :icon="['fab', s.icon]" />
    </a>
  </div>
</template>

<script setup lang="ts">
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
