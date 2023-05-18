<template>
  <div class="relative">
    <nav class="fixed z-50 top-0 left-0 right-0 bg-white border-b dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-8">
        <a href="/" class="flex items-center">
          <div
            id="logo"
            class="flex flex-row self-center"
            >
              <img
              src="~/assets/img/gr_icon.png"
              alt="Guilherme Raduenz"
              class="rounded h-auto w-8 mr-4"
              />
              <span class="text-xl font-bold whitespace-nowrap dark:text-white">
                Guilherme Raduenz
              </span>
            </div>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li
              v-for="item in menu"
              :key="item.label"
              >
              <a
                @click="scrollInto(item.targetElementSelector)"
                class="cursor-pointer block font-medium px-4 py-2 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                {{ item.label }}
              </a>
            </li>
            <li
              class="my-4 md:my-0"
              >
              <a
                href="https://tally.so/r/woDbrx"
                class="text-white drop-shadow-md bg-mine hover:bg-mine-tonal font-bold rounded text-sm px-5 py-3 mx-3 md:mx-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const menu = [
  ['Home', ''],
  ['About', '#About'],
  ['Experience', '#Experience'],
  ['Projects', '#Projects'],
  ['Education', '#Education'],
].map(arr => ({
  label: arr[0],
  targetElementSelector: arr[1],
}));

const scrollInto = (targetElementSelector: string) => {
  if (targetElementSelector) {
    const el = document.querySelector(targetElementSelector);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
  else {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
};
</script>