<template>
  <div class="py-10">
    <div class="container">
      <h2 class="text-2xl font-black mb-5">
        Waar heb je zin in?
      </h2>
      <div ref="container" class="keen-slider">
        <div v-for="(category, index) in categories" class="keen-slider__slide" :class="'number-slide' + index">

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useKeenSlider } from 'keen-slider/vue.es'

const categories = ref([
  {
    title: "Pizza's",
    thumbnail: '/stock-pizza.png',
    url: '/',
  },
  {
    title: "Meltzz",
    thumbnail: '/stock-pizza.png',
    url: '/',
  },
  {
    title: "Bijgerechten",
    thumbnail: '/stock-pizza.png',
    url: '/',
  }
  {
    title: "Drankjes",
    thumbnail: '/stock-pizza.png',
    url: '/',
  },
  {
    title: "Desserts",
    thumbnail: '/stock-pizza.png',
    url: '/',
  },
  {
    title: "Aanbiedingen",
    thumbnail: '/stock-pizza.png',
    url: '/',
  }
]);

const [container] = useKeenSlider({
  slides: {
    perView: 3.5,
    spacing: 30,
  },
});
</script>
