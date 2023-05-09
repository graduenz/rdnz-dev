<template>
  <div class="flex flex-col space-y-8 py-8 bg-white text-center border-t">
    <div class="flex flex-row items-center justify-center mx-auto">
      <p class="font-medium">
        Guilherme Raduenz &horbar;
      </p>
      <img
        src="~/assets/img/brazil.png"
        alt="Brazil"
        class="rounded h-auto w-8 ml-2"
        />
    </div>
    <div class="flex flex-row space-x-4 items-center justify-center mx-auto text-2xl">
      <a
        v-for="s in social"
        :href="s.data.url"
        :title="s.data.name"
      >
      <font-awesome-icon :icon="['fab', s.data.icon]" />
      </a>
    </div>
    <p class="text-xs">
      &copy; {{ new Date().getUTCFullYear() }} All rights reserved. – Designed and coded by myself.
    </p>
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