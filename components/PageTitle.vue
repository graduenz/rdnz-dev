<template>
  <div>
    <h1 class="scroll-m-16 text-5xl font-black whitespace-nowrap dark:text-gray-100">
      {{ title }}
    </h1>
    <h2 class="text-gray-500 text-lg pt-2">
      {{ subtitle }}
    </h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>
