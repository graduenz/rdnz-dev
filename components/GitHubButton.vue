<!-- eslint-disable vue/no-v-html -->
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
    <div
      class="inline-block mr-2 pt-1 w-5 h-5 fill-white dark:fill-black"
      v-html="siGithub.svg"
    />
    <span>{{ label }}</span>
  </a>
</template>

<script setup lang="ts">
import { siGithub } from 'simple-icons';

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
</script>
