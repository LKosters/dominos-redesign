<template>
  <div class="py-10">
    <div>
      <div class="container">
        <h2 class="text-2xl font-black mb-5">
          Waar heb je zin in?
        </h2>
      </div>
      <div ref="container" class="keen-slider">
        <div v-for="(category, index) in categories" class="keen-slider__slide" :class="'number-slide' + index">
          <NuxtLink class="p-3 w-full h-full bg-white rounded-[10px] shadow-md block group" :to="category.title">
            <NuxtImg class="w-full h-[180px] object-cover rounded-[10px]" :src="category.thumbnail"/>
            <div class="flex items-center pt-3">
              <h3 class="font-bold mr-3">{{ category.title }}</h3>
              <ArrowRightIcon class="size-4 stroke-2 duration-300 group-hover:translate-x-1"/>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline';
import { useKeenSlider } from 'keen-slider/vue.es';

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
  },
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

<style scoped>
.keen-slider__slide:first-child {
  margin-left: calc((100vw - 1024px) / 2);
  padding-left: 2rem;
}
</style>
