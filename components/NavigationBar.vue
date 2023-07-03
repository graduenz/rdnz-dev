<template>
  <div class="relative">
    <nav class="z-50 top-0 left-0 right-0 border-b dark:border-gray-800">
      <div class="max-w-screen-lg flex items-center mx-auto py-4 px-4">
        <div class="">
          <a href="/" class="flex items-center rounded bg-mine hover:bg-mine-tonal">
            <div
              id="logo"
              class="flex flex-row self-center"
            >
              <img
                src="/gr.png"
                alt="Guilherme Raduenz"
                class="h-auto w-12"
              >
            </div>
          </a>
        </div>
        <div class="grow" />
        <div>
          <ul class="hidden md:flex pr-8 flex-row space-x-4">
            <li
              v-for="item in menu"
              :key="item.label"
            >
              <a
                :href="item.href"
                :class="[item.isActive ? 'text-black dark:text-white' : 'text-gray-500', 'cursor-pointer block font-semibold rounded md:border-0 hover:text-black dark:hover:text-white transition-all']"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>
        <div
          id="navbar-default"
          class="block w-auto"
        >
          <ul class="flex flex-row space-x-4">
            <li>
              <ThemeToggleButton />
            </li>
            <li class="block md:hidden">
              <span
                class="cursor-pointer text-gray-500 hover:text-black dark:hover:text-white transition-all"
                @click="toggleMenu"
              >
                <Bars3Icon class="w-6 h-6" />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="menuToggleOn" class="max-w-screen-lg mx-auto pl-4 py-4">
        <ul class="flex md:hidden pr-4 flex-col space-x-0">
          <li
            v-for="item in menu"
            :key="item.label"
          >
            <a
              :href="item.href"
              :class="['px-4 py-2', item.isActive ? 'bg-gray-200 dark:bg-gray-800 text-black dark:text-white' : 'text-gray-500', 'cursor-pointer block font-medium rounded md:border-0 hover:text-black dark:hover:text-white transition-all']"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/24/solid';

const route = useRoute();

const menu = [
  ['Blog', '/'],
  ['Sobre', '/sobre'],
  ['Labs', '/labs'],
  ['Contato', '/contato'],
].map(arr => ({
  label: arr[0],
  href: arr[1],
  isActive: route.path === arr[1],
}));

const menuToggleOn = ref(false);
const toggleMenu = () => {
  menuToggleOn.value = !menuToggleOn.value;
};
</script>
