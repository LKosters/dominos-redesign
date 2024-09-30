<template>
  <div>
    <h3 class="text-2xl font-bold mb-3">{{ column.title }}</h3>
    <ul>
      <li v-for="navItem in column.navItems">
        <NuxtLink :to="navItem.url">
          {{ navItem.text }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  column: Object,
})
</script>
