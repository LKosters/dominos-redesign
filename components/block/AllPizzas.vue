<template>
  <div class="bg-dominoWhite py-10">
    <div class="container">
      <h2 class="text-2xl font-black mb-5">
        Alle pizza's
      </h2>
      <div class="columns-4 gap-5">
        <div class="mb-2" v-for="(product, index) in 20">
          <NuxtLink class="p-3 w-full bg-dominoWhite rounded-[10px] shadow-md block group h-max" to="/">
            <NuxtImg class="w-full h-[180px] object-cover rounded-[10px]" src="/stock-pizza.png"/>
            <div class="pt-3">
              <h3 class="font-bold mr-3">
                Pizza Shoarma
              </h3>
              <p class="text-xs">
                Tomatensaus, kaas, shoarmavlees en knoflooksaus
              </p>
              <select class="mt-5 mb-3 w-full bg-dominoLightGray rounded-[10px] p-2">
                <option>Kies optie</option>
              </select>
              <UiButton classes="!w-full text-center" url="/" variant="cta">
                Toevoegen
              </UiButton>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
