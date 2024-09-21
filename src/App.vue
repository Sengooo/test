<template>
  <div id="app">
    <Header />
    <main>
      <ItemDisplay :item="selectedItem" />
      </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import ItemDisplay from './components/ItemDisplay.vue';
import { useCounter } from './composables/useCounter';

export default {
  components: {
    Header,
    Footer,
    ItemDisplay,
  },
  setup() {
    const selectedItem = ref(null);
    const { count, increment, decrement } = useCounter();

    const handleItemClick = (item) => {
      selectedItem.value = item;
    };

    return {
      selectedItem,
      count,
      increment,
      decrement,
      handleItemClick,
    };
  },
};
</script>