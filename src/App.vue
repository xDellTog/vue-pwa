<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useConnectionStore } from "./stores/connection";

const connectionStore = useConnectionStore();
</script>

<template>
  <header class="fixed bg-blue-500 text-white w-screen p-2">
    <nav class="flex gap-2">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />

  <footer
    :class="`fixed bottom-0  text-white w-screen p-2 ${
      connectionStore.isOnline ? 'bg-green-500' : 'bg-red-500'
    }`"
  >
    {{ connectionStore.isOnline ? "Online" : "Offline" }}
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
