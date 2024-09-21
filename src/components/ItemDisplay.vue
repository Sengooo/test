<template>
    <div v-if="item">
      <h2>{{ item.name }}</h2>
      <p>{{ item.description }}</p>
      <img :src="item.image" alt="Item Image">
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
  };
  </script>