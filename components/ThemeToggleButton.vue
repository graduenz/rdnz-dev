<template>
  <span
    class="cursor-pointer block px-4 py-2 text-gray-500 rounded md:border-0 hover:text-black dark:hover:text-white md:p-0 transition-all"
    @click="toggleTheme"
    >
    <SunIcon
      v-if="isDarkMode"
      class="w-5 h-5"
      />
    <MoonIcon
      v-else
      class="w-5 h-5"
      />
  </span>
</template>

<script setup lang="ts">
import { SunIcon } from '@heroicons/vue/24/outline';
import { MoonIcon } from "@heroicons/vue/24/solid";

const colorMode = useColorMode();
const isDarkMode = computed(() => colorMode.preference === 'dark');
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark'
    ? 'light'
    : 'dark';
};
</script>