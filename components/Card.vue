<template>
  <div class="w-full p-2 flex flex-row">
    <div class="pt-1 flex-shrink-0 w-16">
      <slot name="left"></slot>
    </div>
    <div class="pl-4 flex flex-col grow">
      <div class="flex flex-row">
        <div class="grow">
          <div class="text-lg font-medium dark:text-gray-100">
            <slot name="title"></slot>
          </div>
          <div class="text-gray-500">
            <slot name="subtitle"></slot>
          </div>
        </div>
        <div v-if="toggling">
          <ChevronUpIcon
            v-show="expanded"
            @click="collapse"
            class="cursor-pointer w-5 h-5 text-gray-500"
            />
          <ChevronDownIcon
            v-show="!expanded"
            @click="expand"
            class="cursor-pointer w-5 h-5 text-gray-500"
            />
        </div>
      </div>
      <div
        v-if="!toggling || expanded"
        class="mt-4"
        >
        <slot name="content"></slot>
      </div>
      <div class="mt-4 flex flex-row space-x-4">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/24/outline';

const props = defineProps<{
  toggling: boolean,
}>();

const expanded = ref(false);
const expand = () => expanded.value = true;
const collapse = () => expanded.value = false;
</script>