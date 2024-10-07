<template>
  <div class="bg-dominoWhite py-10">
    <div class="container">
      <h2 class="text-2xl font-black mb-5">
        Alle pizza's
      </h2>
      <div class="columns-2 lg:columns-4 gap-5">
        <div class="mb-4 lg:mb-2" v-for="(product, index) in 20">
          <UiProduct theme="gray"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
