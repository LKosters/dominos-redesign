<template>
  <div class="h-screen">
    <div class="card">
      <div class="upper-card">
        <h3>Titel</h3>
      </div>
      <div class="bottom-card">
        <div class="button-card">
          Knop
        </div>
        <div class="image-card">
          Afbeelding
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.card {
  background: #00dc82;
  height: 250px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.upper-card {
  padding-left: 20px;
  padding-top: 40px;
}

.bottom-card {
  display: flex;
  justify-content: space-between;
}

.button-card {
  padding-left: 20px;
}

.image-card {
  height: 100px;
  width: 100px;
  background-color: #0047e1;
}
</style>
<script setup lang="ts">
</script>