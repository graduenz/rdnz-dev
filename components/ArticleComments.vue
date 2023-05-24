<template>
  <Script
    src="https://giscus.app/client.js"
    data-repo="graduenz/rdnz-dev"
    data-repo-id="R_kgDOJgXvBQ"
    data-category="Blog"
    data-category-id="DIC_kwDOJgXvBc4CWt6U"
    data-mapping="pathname"
    data-strict="0"
    data-reactions-enabled="1"
    data-emit-metadata="0"
    data-input-position="bottom"
    :data-theme="isDarkMode ? 'transparent_dark' : 'light'"
    data-lang="en"
    crossorigin="anonymous"
    async>
  </Script>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const isDarkMode = computed(() => colorMode.preference === 'dark');
</script>