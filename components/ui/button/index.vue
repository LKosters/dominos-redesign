<template>
  <NuxtLink
      class="px-5 py-3 block w-max rounded-[10px] font-bold duration-300 hover:-translate-y-0.5"
      :class="[
          {'bg-dominoBlue text-white' : variant === 'primary'},
          {'bg-dominoWhite' : variant === 'secondary'},
          {'bg-dominoRed text-white': variant === 'tertiary'},
          {'bg-dominoGreen text-white': variant === 'cta'},
          classes
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
  classes: String,
});
</script>
