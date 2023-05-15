<template>
  <div class="mt-8 flex flex-col space-y-8 py-8 bg-white text-center border-t">
    <div class="flex flex-row items-center justify-center mx-auto">
      <p class="font-medium">
        Guilherme Raduenz &horbar;
      </p>
      <img
        src="~/assets/img/brazil.png"
        alt="Brazil"
        class="rounded h-auto w-8 ml-2"
        />
    </div>
    <Social />
    <p class="text-xs">
      &copy; {{ new Date().getUTCFullYear() }} All rights reserved. – Designed and coded by myself.
    </p>
  </div>
</template>
