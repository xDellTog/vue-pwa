<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useConnectionStore } from "./stores/connection";

const connectionStore = useConnectionStore();
</script>

<template>
  <header class="fixed w-screen">
    <nav class="flex gap-2 bg-blue-500 text-white p-2 h-full">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />

  <footer class="fixed bottom-0 w-screen">
    <nav
      :class="`text-white  p-2 ${
        connectionStore.isOnline ? 'bg-green-500' : 'bg-red-500'
      }`"
    >
      <span>
        {{ connectionStore.isOnline ? "Online" : "Offline" }}
      </span>
    </nav>
  </footer>
</template>

<style lang="css" scoped>
header {
  padding-top: env(safe-area-inset-top);
}
footer {
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
