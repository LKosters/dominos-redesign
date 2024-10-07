<template>
  <div class="py-10 bg-dominoWhite">
    <div>
      <div class="container">
        <h2 class="text-2xl font-black mb-5">
          Populaire pizza’s
        </h2>
      </div>
      <div ref="container" class="keen-slider container">
        <div v-for="(product, index) in 15" class="keen-slider__slide" :class="'number-slide' + index">
          <UiProduct theme="gray"/>
        </div>
      </div>
    </div>
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
