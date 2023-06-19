<template>
  <div class="w-full p-2 flex flex-row">
    <div class="pt-2 flex-shrink-0 w-14">
      <slot name="left" />
    </div>
    <div class="pl-4 flex flex-col grow">
      <div class="flex flex-row">
        <div class="grow">
          <div class="text-lg font-medium dark:text-gray-100">
            <slot name="title" />
          </div>
          <div class="text-gray-500">
            <slot name="subtitle" />
          </div>
        </div>
        <div v-if="toggling">
          <ChevronUpIcon
            v-show="expanded"
            class="cursor-pointer w-5 h-5 text-gray-500"
            @click="collapse"
          />
          <ChevronDownIcon
            v-show="!expanded"
            class="cursor-pointer w-5 h-5 text-gray-500"
            @click="expand"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/24/outline';

defineProps<{
  toggling: boolean,
}>();

const expanded = ref(false);
const expand = function () { expanded.value = true; };
const collapse = function () { expanded.value = false; };
</script>
