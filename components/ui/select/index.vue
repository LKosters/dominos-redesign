<template>
  <select
      class="px-5 py-3 block w-max rounded-[10px] font-bold duration-300 hover:-translate-y-0.5 appearance-none"
      :class="[
          {'bg-dominoBlue text-white' : variant === 'primary'},
          {'bg-dominoWhite' : variant === 'secondary'},
          {'bg-dominoRed text-white': variant === 'tertiary'},
          {'bg-dominoGreen text-white': variant === 'cta'},
          classes
      ]">
    <option selected="selected">
      <slot>
        {{ text }}
      </slot>
    </option>
    <option v-for="option in options">
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
const props = defineProps({
  variant: String,
  text: String,
  classes: String,
  options: Array,
});
</script>
