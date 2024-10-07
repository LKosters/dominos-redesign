<template>
  <div>
    <h2 class="text-3xl font-black mb-5">Ingrediënten toevoegen</h2>
    <div>
      <BlockDetailPageExtrasItem v-for="item in extras" :item="item"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const extras = ref([
  {
    image: '/pepperoni.png',
    title: 'Pepperoni',
    price: '0,60'
  },
  {
    image: '/pepperoni.png',
    title: 'Pepperoni',
    price: '0,60'
  },
  {
    image: '/pepperoni.png',
    title: 'Pepperoni',
    price: '0,60'
  },
  {
    image: '/pepperoni.png',
    title: 'Pepperoni',
    price: '0,60'
  },
  {
    image: '/pepperoni.png',
    title: 'Pepperoni',
    price: '0,60'
  },
  {
    image: '/pepperoni.png',
    title: 'Pepperoni',
    price: '0,60'
  }
]);
</script>
