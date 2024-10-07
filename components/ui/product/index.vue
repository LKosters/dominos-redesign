<template>
  <NuxtLink :class="{'!bg-dominoLightGray' : theme === 'gray'}" class="p-3 w-full bg-dominoWhite rounded-[10px] duration-300 hover:shadow-md block group h-max group" to="/pizza-shoarma">
    <div class="overflow-hidden relative rounded-[10px]">
      <NuxtImg class="w-full h-[180px] object-cover rounded-[10px] duration-300 group-hover:scale-110" src="/stock-pizza.png"/>
    </div>
    <div class="pt-3">
      <h3 class="font-bold mr-3">
        Pizza Shoarma
      </h3>
      <p class="text-xs">
        Tomatensaus, kaas, shoarmavlees en knoflooksaus
      </p>
      <select :class="{'!bg-dominoWhite' : theme === 'gray'}" class="mt-5 mb-3 w-full bg-dominoLightGray rounded-[10px] p-2">
        <option>Kies optie</option>
      </select>
      <UiButton classes="!w-full text-center" url="/" variant="cta">
        Toevoegen
      </UiButton>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  product: Object,
  theme: String,
});
</script>
