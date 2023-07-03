<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="pt-12 flex flex-col md:flex-row space-y-12 md:space-y-0 space-x-0 md:space-x-4">
    <div class="basis-1/2 prose dark:prose-invert">
      <h2>WhatsApp</h2>
      <p>Disponibilizo um número de WhatsApp profissional para um contato mais rápido, direto e informal &horbar; é a forma que eu mais gosto de contatar outras pessoas também, na maioria das vezes.</p>
      <a
        :href="`https://wa.me/${settings?.data.whatsapp}`"
        class="py-3 px-4 rounded-full no-underline bg-[#25D366] hover:bg-[#4de084] text-white space transition-all"
      >
        <div
          class="pt-1 mr-1 inline-block w-5 h-5 fill-white"
          v-html="siWhatsapp.svg"
        />
        Me chame no WhatsApp
      </a>
      <p class="pt-2 text-xs">
        Ou então, se preferir, copie o número: {{ formattedWhatsApp(settings?.data.whatsapp!) }}
      </p>
    </div>
    <div class="basis-1/2 prose dark:prose-invert">
      <h2>
        E-mail
      </h2>
      <p>Se você prefere o clássico ou tem algum requisito específico, eu te entendo! Envie um e-mail para <b>{{ settings?.data.email }}</b>, e eu retorno assim que possível!</p>
      <a
        :href="`mailto:${settings?.data.email}`"
        class="py-3 px-4 rounded-full no-underline bg-mine hover:bg-mine-tonal text-white transition-all"
      >
        <div
          class="pt-1 mr-1 inline-block w-5 h-5 fill-white"
          v-html="siMaildotru.svg"
        />
        Envie um e-mail
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { siWhatsapp, siMaildotru } from 'simple-icons';
import { SettingsDocument } from '~/prismicio-types';

const { client } = usePrismic();

const { data: settings } = await useAsyncData('settings', async () => {
  const documents = await client.getAllByType<SettingsDocument>('settings');

  if (documents && documents.length > 0) {
    return documents[0];
  } else {
    throw createError({ statusCode: 404, message: 'Page not found' });
  }
});

const formattedWhatsApp = (number: string) => {
  return `+${number.slice(0, 2)} (${number.slice(2, 4)}) ${number.slice(4, 9)}-${number.slice(9, 13)}`;
};
</script>
