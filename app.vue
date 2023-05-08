<template>
  <div class="h-screen">
    <NuxtLayout>
      <Navbar />
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { initFlowbite } from 'flowbite';

onMounted(() => {
    initFlowbite();
})
</script>