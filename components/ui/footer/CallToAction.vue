<template>
  <div class="bg-dominoRed py-48 relative">
    <div class="container flex justify-center lg:items-center gap-10 lg:gap-40 lg:flex-row flex-col">
      <div>
        <h2 class="text-dominoWhite text-4xl font-black mb-5">
          Probeer ook is een dessert
        </h2>
        <p class="text-dominoWhite">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div>
        <UiButton variant="secondary" url="/desserts">
          Bekijk desserts
        </UiButton>
      </div>
    </div>
    <div class="bg-top-divider bg-no-repeat bg-cover w-full h-32 absolute top-0"></div>
    <div class="bg-bottom-divider bg-no-repeat bg-cover w-full h-32 absolute bottom-0"></div>
  </div>
</template>

<script setup lang="ts">
</script>
