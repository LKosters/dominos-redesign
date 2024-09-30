<template>
  <UiHeaderTopbar/>
  <div :class="{'shadow-bottom !py-4' : scrollY > 30}" class="py-6 sticky top-0 bg-dominoWhite z-10 duration-300">
    <div class="container flex justify-between items-center">
      <div>
        <NuxtLink class="group" to="/">
          <NuxtImg class="size-10 duration-300 group-hover:rotate-12" src="/logo.svg"/>
        </NuxtLink>
      </div>
      <ul class="flex items-center">
        <li class="ml-6 lg:block hidden" v-for="navItem in navItems">
          <NuxtLink class="font-bold duration-300 hover:text-dominoBlue" :to="navItem.url">
            {{ navItem.text }}
          </NuxtLink>
        </li>
        <li class="ml-6">
          <UiButton variant="cta" url="/">
            Aanbiedingen
          </UiButton>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { scrollX, scrollY } = useScrollPosition();

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
