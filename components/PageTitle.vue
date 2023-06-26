<template>
  <div>
    <h1 class="scroll-m-16 text-5xl font-bold  tracking-tighter whitespace-nowrap text-gray-800 dark:text-gray-200">
      {{ title }}
    </h1>
    <h2 v-if="subtitle" class="pt-2 text-gray-500 text-lg">
      {{ subtitle }}
    </h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>
