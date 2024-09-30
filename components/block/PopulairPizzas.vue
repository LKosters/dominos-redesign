<template>
  <div class="py-10 bg-dominoWhite">
    <div>
      <div class="container">
        <h2 class="text-2xl font-black mb-5">
          Populaire pizza’s
        </h2>
      </div>
      <div ref="container" class="keen-slider">
        <div v-for="(product, index) in products" class="keen-slider__slide" :class="'number-slide' + index">
          <NuxtLink class="p-3 w-full h-full bg-white rounded-[10px] shadow-md block group" :to="product.title">
            <NuxtImg class="w-full h-[180px] object-cover rounded-[10px]" :src="product.thumbnail"/>
            <div class="flex items-center pt-3">
              <h3 class="font-bold mr-3">
                {{ product.title }}
              </h3>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
