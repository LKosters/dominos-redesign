<template>
  <div class="py-6 shadow-bottom sticky top-0 bg-dominoWhite z-10">
    <div class="container flex justify-between">
      <div>
        Logo
      </div>
      <ul class="flex">
        <li class="ml-6" v-for="navItem in navItems">
          <NuxtLink :to="navItem.url">
            {{ navItem.text }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const navItems = ref([
  {
    text: "Pizza's",
    url: '/pizzas',
  },
  {
    text: "Meltzz",
    url: '/meltzz',
  },
  {
    text: "My Domino's Box",
    url: '/meltzz',
  },
  {
    text: "Bijgerechten",
    url: '/bijgerechten',
  },
  {
    text: "Drankjes",
    url: '/drankjes',
  },
  {
    text: "Desserts",
    url: '/desserts',
  }
])
</script>
