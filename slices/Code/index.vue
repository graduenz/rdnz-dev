<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div
      :id="slice.id"
      class="flex flex-row flex-nowrap space-x-4 p-4 rounded-lg bg-[#22272e]"
      >
      <pre class="line-numbers flex flex-col text-gray-600 text-[15px] text-right"></pre>
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

const code = (props.slice.primary.code[0] as any).text;

onMounted(async () =>{
  const sliceDiv = document.getElementById(props.slice.id!);
  
  if (!sliceDiv) return false;

  const hl = await getHighlighter({
    theme: 'github-dark-dimmed',
  });
  
  const codeHtmlDiv = document.createElement('div');
  codeHtmlDiv.className = 'grow overflow-hidden';

  codeHtmlDiv.innerHTML = hl.codeToHtml(code, {
    lang: props.slice.primary.language!,
  });
  sliceDiv.appendChild(codeHtmlDiv);

  const lineNumbersDiv = sliceDiv?.querySelector('.line-numbers');
  if (lineNumbersDiv) {
    const lines = codeHtmlDiv.querySelectorAll('span.line');
    for (let ln = 0; ln < lines.length; ++ln) {
      const lnElement = document.createElement('span');
      lnElement.innerText = (ln + 1).toString();
      lineNumbersDiv.appendChild(lnElement);
    }
  }
});
</script>
