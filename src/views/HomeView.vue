<script setup lang="ts">
import { useConnectionStore } from "@/stores/connection";

const connectionStore = useConnectionStore();
</script>

<template>
  <main class="flex flex-col items-center justify-center h-screen">
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div>
      <p>isOnline: {{ connectionStore.isOnline }}</p>
      <p>isOffline: {{ connectionStore.isOffline }}</p>
    </div>
  </main>
</template>
