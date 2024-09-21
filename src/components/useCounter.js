import { ref } from 'vue';

export function useCounter() {
  const count = ref(0); // Reactive reference for counter

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  return { count, increment, decrement };
}
