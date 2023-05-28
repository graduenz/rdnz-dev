<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div
      v-html="codeHtml"
      class="p-4 overflow-hidden rounded-lg bg-[#22272e]"
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import { Content } from "@prismicio/client";
import { getHighlighter } from "shiki";

const props = defineProps(
  getSliceComponentProps<Content.CodeSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const { data: codeHtml } = await useAsyncData(props.slice.id!, async () => {
  const hl = await getHighlighter({
    theme: 'github-dark-dimmed',
  });
  
  const code = (props.slice.primary.code[0] as any).text;

  return hl.codeToHtml(code, {
    lang: props.slice.primary.language!,
  });
});
</script>
