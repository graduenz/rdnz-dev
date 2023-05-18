<template>
  <span
    class="cursor-pointer block text-lg font-medium px-4 py-2 text-gray-500 rounded md:border-0 hover:text-black dark:hover:text-white md:p-0"
    @click="toggleTheme"
    >
    <font-awesome-icon :icon="['fas', isDarkMode ? 'sun' : 'moon']" />
  </span>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const isDarkMode = computed(() => colorMode.preference === 'dark');
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark'
    ? 'light'
    : 'dark';
};
</script>