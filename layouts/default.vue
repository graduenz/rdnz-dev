<template>
  <div class="flex flex-col h-screen">
    <header>
      <Navbar />
    </header>
    <main class="mb-auto">
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