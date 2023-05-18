<template>
  <div class="max-w-screen-xl md:w-[650px] mx-auto px-4 pb-0 md:pb-8">
    <h1
      :id="name"
      class="scroll-m-16 pb-8 pt-16 text-5xl md:text-6xl font-ls font-bold text-center whitespace-nowrap dark:text-white"
      >
      {{ name }}
    </h1>
    <div class="flex flex-col space-y-4">
      <SliceZone
        :slices="document?.data.slices"
        :components="components"
        />
    </div>
  </div>
</template>

<script setup lang="ts">
import { components } from '~/slices';
import { SectionDocument } from '~/prismicio-types';

const props = defineProps<{
  name: string,
}>();

const { client } = usePrismic();

const { data: document } = await useAsyncData(props.name, async () => {
  const documents = await client.getAllByType<SectionDocument>("section", {
    predicates: [
      `[at(my.section.name, "${props.name}")]`
    ]
  });

  if (documents && documents.length > 0) {
    return documents[0];
  } else {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});
</script>