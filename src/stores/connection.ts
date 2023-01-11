import { defineStore } from "pinia";
import { onMounted, ref } from "vue";

export const useConnectionStore = defineStore("connection", () => {
  const isOnline = ref<boolean>();
  const isOffline = ref<boolean>();

  onMounted(() => {
    isOnline.value = navigator.onLine;
    isOffline.value = !navigator.onLine;

    window.ononline = () => {
      isOnline.value = true;
      isOffline.value = false;
    };

    window.onoffline = () => {
      isOnline.value = false;
      isOffline.value = true;
    };
  });

  return {
    isOnline,
    isOffline,
  };
});
