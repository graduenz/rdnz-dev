<template>
  <a
    :class="[
      getSizePaddings(),
      `text-${size}`,
      'rounded-3xl font-medium transition-all',
      'text-white bg-black hover:bg-gray-800',
      'dark:text-black dark:bg-white dark:hover:bg-gray-200']"
    :href="url"
  >
    <img
      :src="isDarkMode ? '/github-mark.svg' : '/github-mark-white.svg'"
      :alt="label"
      class="inline-block aspect-square w-5 mr-2 -mt-1"
    >
    <span>{{ label }}</span>
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  url: {
    required: true,
    type: String,
  },
  label: {
    type: String,
    default: 'GitHub',
  },
  size: {
    type: String,
    default: 'base',
    validator: (value: string) => ['sm', 'base'].includes(value),
  },
});

const getSizePaddings = () =>
  props.size === 'sm'
    ? 'py-2 px-3'
    : 'py-3 px-4';

const colorMode = useColorMode();
const isDarkMode = computed(() => colorMode.preference === 'dark');
</script>
