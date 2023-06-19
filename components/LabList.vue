<template>
  <div class="pt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
    <LabListItem
      v-for="lab in documents"
      :key="lab.data.name"
      :lab="lab"
    />
  </div>
</template>

<script setup lang="ts">
import { LabDocument } from '~/prismicio-types';

const { client } = usePrismic();

const { data: documents } = await useAsyncData('Labs', async () => {
  const documents = await client.getAllByType<LabDocument>('lab', {
    orderings: {
      field: 'my.lab.date',
      direction: 'desc',
    },
  });

  if (documents && documents.length > 0) {
    return documents;
  } else {
    throw createError({ statusCode: 404, message: 'Page not found' });
  }
});
</script>
