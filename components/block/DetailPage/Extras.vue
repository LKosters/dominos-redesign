<template>
  <div>
    <h2 class="text-2xl lg:text-3xl font-black mb-5">Ingrediënten toevoegen</h2>
    <div>
      <BlockDetailPageExtrasItem v-for="item in extras" :item="item"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  extras: Object,
});
</script>
