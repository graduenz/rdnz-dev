<template>
  <span
    class="cursor-pointer block text-gray-500 pt-0.5 rounded hover:text-black dark:hover:text-white transition-all"
    @click="toggleTheme"
  >
    <SunIcon
      v-if="isDarkMode"
      class="w-6 h-6"
    />
    <MoonIcon
      v-else
      class="w-6 h-6"
    />
  </span>
</template>

<script setup lang="ts">
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline';

const colorMode = useColorMode();
const isDarkMode = computed(() => colorMode.preference === 'dark');

onMounted(() => {
  if (colorMode.preference === 'system') {
    colorMode.preference = 'light';
  }
});

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark'
    ? 'light'
    : 'dark';

  applyThemeChanges(colorMode.preference === 'dark');
};

const applyThemeChanges = (dark: boolean) => {
  // Sets giscus iframe to either black or white theme
  const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
  if (!iframe || !iframe.contentWindow) {
    return;
  }
  iframe.contentWindow.postMessage({
    giscus: {
      setConfig: {
        theme: dark ? 'transparent_dark' : 'light',
      },
    },
  }, 'https://giscus.app');
};
</script>
