<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <Head>
    <Meta name="theme-color" :content="isDarkMode ? '#020617' : '#ffffff'" />
  </Head>
  <div class="flex flex-col h-screen">
    <header>
      <NavigationBar />
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
const colorMode = useColorMode();
const isDarkMode = computed(() => colorMode.preference === 'dark');
</script>
