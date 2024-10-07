<template>
  <div class="mt-10">
    <h1 class="font-black text-3xl lg:text-5xl mb-5">Pizza Shoarma</h1>
    <p class="font-black mb-5">€ 14,99</p>
    <p class="mb-5 hidden lg:flex items-center font-bold">
      <GlobeEuropeAfricaIcon class="size-6 stroke-2 mr-2 text-dominoGreen"/>
      Met het bestellen van deze pizza worden 2 bomen geplant!
    </p>
    <p class="hidden lg:block lg:w-[600px] mb-5">
      Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis imperdiet massa faucibus lacinia nibh justo. Litora ultricies imperdiet sodales vitae mollis eu habitasse montes.
    </p>
    <div class="flex flex-wrap mb-20">
      <UiSelect :options="options" classes="mr-4 cursor-pointer mb-5 lg:mb-0" variant="primary">
        Kies formaat
      </UiSelect>
      <UiSelect :options="quantity" classes="mr-4 cursor-pointer mb-5 lg:mb-0" variant="tertiary">
        Hoeveelheid
      </UiSelect>
      <UiButton classes="mr-4 mb-5 lg:mb-0" url="/" variant="cta">
        Toevoegen
      </UiButton>
    </div>
    <div class="hidden lg:block">
      <BlockDetailPageExtras :extras="extras"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import { GlobeEuropeAfricaIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  options: Array,
  quantity: Array,
  extras: Object,
});
</script>
