<template>
  <div class="flex flex-row space-x-4 items-center justify-center mx-auto text-2xl text-gray-700">
    <a
      v-for="s in social"
      :href="s.data.url"
      :title="s.data.name"
    >
    <font-awesome-icon :icon="['fab', s.data.icon]" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { SocialDocument } from '~/prismicio-types';

const { client } = usePrismic();

const { data: social } = await useAsyncData("social", async () => {
  const social = await client.getAllByType<SocialDocument>("social", {
    orderings: {
        field: 'my.social.name',
        direction: 'asc',
    }
  });

  if (social) {
    return social;
  } else {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});
</script>