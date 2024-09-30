<template>
  <div class="py-24">
    <div class="container">
      <h2 class="text-xl font-black text-dominoBlue">
        Vanavond lekker domino’s
      </h2>
      <h1 class="text-5xl font-black relative">
        Probeer nu onze
        <span class="rotating-text absolute pl-2">nieuwe Meltzz</span>
        <span class="rotating-text absolute pl-2">heerlijke pizza's</span>
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.rotating-text {
  display: inline-block;
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.5s ease; /* Smooth transition */
  animation: toggleVisibility 10s infinite;
}

.rotating-text:nth-child(1) {
  animation-delay: 0s;
}

.rotating-text:nth-child(2) {
  animation-delay: 5s;
}

@keyframes toggleVisibility {
  0%, 45% {
    opacity: 1;
    transform: translateY(0);
  }
  50%, 100% {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>