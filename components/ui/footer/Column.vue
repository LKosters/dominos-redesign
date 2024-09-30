<template>
  <div>
    <h3 class="text-xl font-black mb-5">{{ column.title }}</h3>
    <ul>
      <li class="mb-2" v-for="navItem in column.navItems">
        <NuxtLink class="flex items-center font-bold w-max group duration-300 hover:text-dominoBlue" :to="navItem.url">
          <ChevronRightIcon class="size-4 mr-2 stroke-2 duration-300 group-hover:translate-x-1 group-hover:text-dominoBlue"/>
          {{ navItem.text }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  column: Object,
})
</script>
