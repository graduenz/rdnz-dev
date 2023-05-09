<template>
  <div class="bg-white rounded shadow w-full p-6 flex flex-row">
    <div class="basis-1/12 pt-1">
      <slot name="left"></slot>
    </div>
    <div class="basis-11/12 pl-4 flex flex-col">
      <div class="flex flex-row">
        <div class="grow">
          <div class="text-lg font-medium">
            <slot name="title"></slot>
          </div>
          <div class="text-gray-500">
            <slot name="subtitle"></slot>
          </div>
        </div>
        <div v-if="toggling">
          <font-awesome-icon
            v-show="expanded"
            :icon="['fas', 'chevron-up']"
            @click="collapse"
            class="h-6 w-6 text-gray-500 cursor-pointer"
            />
          <font-awesome-icon
            v-show="!expanded"
            :icon="['fas', 'chevron-down']"
            @click="expand"
            class="h-6 w-6 text-gray-500 cursor-pointer"
            />
        </div>
      </div>
      <div
        v-if="!toggling || expanded"
        class="mt-4"
        >
        <slot name="content"></slot>
      </div>
      <div class="mt-4 flex flex-row space-x-4 text-xl text-gray-500">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    toggling: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const expanded = ref(false);
    const expand = () => expanded.value = true;
    const collapse = () => expanded.value = false;

    return { expanded, expand, collapse }
  }
}
</script>