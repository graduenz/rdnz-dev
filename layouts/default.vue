<template>
  <div class="flex flex-col h-screen">
    <header>
      <Navbar />
    </header>
    <main class="mb-auto md:py-16 bg-gradient-to-t from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <slot />
    </main>
    <footer>
      <StickyFooter />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { initFlowbite } from 'flowbite';

onMounted(() => {
    initFlowbite();
})
</script>