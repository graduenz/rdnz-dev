<template>
  <div class="relative">
    <nav class="fixed z-50 top-0 left-0 right-0 bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center mx-auto px-4 py-8">
        <div class="grow">
          <a href="/" class="grow flex items-center">
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
        </div>
        <div class="inline-flex md:hidden">
          <ThemeToggleButton />
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
          >
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 dark:border-gray-700 rounded-lg md:flex-row md:space-x-6 md:mt-0 md:border-0">
            <li
              v-for="item in menu"
              :key="item.label"
              >
              <a
                :href="item.href"
                class="cursor-pointer block font-medium px-4 py-2 text-gray-600 dark:text-gray-300 rounded md:border-0 hover:text-black dark:hover:text-white md:p-0"
                >
                {{ item.label }}
              </a>
            </li>
            <li class="hidden md:inline-flex">
              <ThemeToggleButton />
            </li>
            <li
              class="my-4 md:my-0"
              >
              <a
                href="https://tally.so/r/woDbrx"
                class="text-white drop-shadow-md bg-mine hover:bg-mine-tonal font-bold rounded text-sm px-5 py-3 mx-3 md:mx-0"
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
  ['Home', '/'],
  ['About', '/about'],
].map(arr => ({
  label: arr[0],
  href: arr[1],
}));
</script>