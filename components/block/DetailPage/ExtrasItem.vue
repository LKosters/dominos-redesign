<template>
  <div class="rounded-[10px] border-solid border-black border lg:w-[600px] mb-3 px-5 py-1 flex items-center justify-between">
    <div class="flex items-center">
      <NuxtImg class="mr-3 size-[50px]" alt="Extra image" :src="item.image"/>
      <h3 class="font-black text-lg lg:text-xl">
        {{ item.title }}
      </h3>
    </div>
   <div class="flex items-center">
     <h3 class="font-black text-lg lg:text-xl mr-3">
       € {{ item.price }}
     </h3>
     <button class="bg-dominoGreen rounded-full text-dominoWhite size-[40px] flex items-center justify-center font-black text-xl duration-300 hover:scale-110">
       +
     </button>
   </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  item: Object,
});
</script>
