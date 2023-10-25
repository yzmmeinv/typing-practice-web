import { ref } from 'vue';

export function useDebounce() {
  const isDebounced = ref(false);

  function debounce(func, delay) {
    return (...args) => {
      if (isDebounced.value) return;

      isDebounced.value = true;
      func(...args);

      setTimeout(() => {
        isDebounced.value = false;
      }, delay);
    };
  }

  return {
    debounce,
  };
}
