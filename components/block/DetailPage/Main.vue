<template>
  <div class="mt-10">
    <h1 class="font-black text-3xl lg:text-5xl mb-5">Pizza Shoarma</h1>
    <p class="font-black mb-5">€ 14,99</p>
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
      <BlockDetailPageExtras/>
    </div>
  </div>
</template>
<script setup lang="ts">
const options = ref(['Medium 25cm', 'Large 29cm', 'Huge 34cm']);
const quantity = ref(['1', '2', '3', '4', '5']);
</script>
