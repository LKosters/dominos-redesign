<template>
  <NuxtLink
      class="px-5 py-3 block w-max rounded-[10px] font-bold"
      :class="[
          {'bg-dominoWhite' : variant === 'secondary'},
          {'bg-dominoGreen text-white': variant === 'cta'}
      ]"
      :to="url">
    <slot>
      {{ text }}
    </slot>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  variant: String,
  text: String,
  url: String,
});
</script>
