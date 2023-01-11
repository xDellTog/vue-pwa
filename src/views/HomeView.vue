<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
import { useConnectionStore } from "@/stores/connection";

const connectionStore = useConnectionStore();
</script>

<template>
  <main>
    <TheWelcome />

    <div>
      {{ connectionStore.isOnline }}
      {{ connectionStore.isOffline }}
    </div>
  </main>
</template>
