<template>
  <div class="bg-dominoWhite py-10">
    <div class="container block lg:flex justify-between">
      <UiFooterColumn :column="column" v-for="column in columns"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  columns: Array,
})
</script>
