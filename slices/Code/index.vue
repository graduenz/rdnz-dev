<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div
      class="codeslice"
      v-html="codeHtml">
    </div>
  </section>
</template>

<script setup lang="ts">
import { Content } from "@prismicio/client";
import { getHighlighter } from "shiki-es";

const props = defineProps(
  getSliceComponentProps<Content.CodeSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const codeHtml = ref('');
const code = (props.slice.primary.code[0] as any).text;

onMounted(async () =>{
  const hl = await getHighlighter({
    theme: 'github-dark-dimmed',
  });
  codeHtml.value = hl.codeToHtml(code, {
    lang: props.slice.primary.language!,
  });
});
</script>
