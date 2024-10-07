<template>
  <div class="bg-dominoBlue py-2 flex justify-center w-full">
    <div class="container flex-col lg:flex-row flex justify-around text-dominoWhite text-sm font-bold w-full">
      <p class="flex items-center w-full justify-center mb-3 lg:mb-0"><TruckIcon class="size-4 mr-3 stroke-2"/> Binnen 30 minuten in huis!</p>
      <p class="flex items-center w-full justify-center mb-3 lg:mb-0"><GlobeEuropeAfricaIcon class="size-4 mr-3 stroke-2"/> Probeer onze nieuwe vegan opties!</p>
      <p class="flex items-center w-full justify-center"><BuildingStorefrontIcon class="size-4 mr-3 stroke-2"/> Altijd een winkel in de buurt!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TruckIcon, GlobeEuropeAfricaIcon , BuildingStorefrontIcon } from '@heroicons/vue/24/outline';
</script>
