<template>
  <div class="relative py-40">
    <div>
      <div class="container">
        <h3 class="text-lg font-black text-dominoBlue">
          Gebasseerd op AI reccomendaties
        </h3>
        <h2 class="text-2xl font-black mb-5">
          Misschien vind je dit ook lekker
        </h2>
      </div>
      <div ref="container" class="keen-slider container">
        <div v-for="(product, index) in 15" class="keen-slider__slide" :class="'number-slide' + index">
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
    <div class="bg-top-divider bg-no-repeat bg-cover w-full h-32 absolute top-0"></div>
    <div class="bg-bottom-divider bg-no-repeat bg-cover w-full h-32 absolute bottom-0"></div>
  </div>
</template>

<script setup lang="ts">
import {useKeenSlider} from "keen-slider/vue.es";

const [container] = useKeenSlider({
  breakpoints: {
    '(min-width: 0px)': {
      slides: {
        perView: 2.5,
        spacing: 30,
      },
    },
    '(min-width: 992px)': {
      slides: {
        perView: 4.5,
        spacing: 30,
      },
    },
  },
});
</script>
