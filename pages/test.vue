<template>
  <div class="h-screen">
    <div class="parent">
      <div class="div1">
        Lorem Ipsum
      </div>
      <div class="div2">
        Button
      </div>
      <div class="div3">
        Afbeelding
      </div>
    </div>
  </div>

</template>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 250px;
  width: 250px;
  background-image: url("/blob.png");
  background-size: contain;

}

.div1 { grid-area: 1 / 1 / 2 / 3; padding-left: 30px; padding-top: 40px}
.div2 { grid-area: 2 / 1 / 3 / 2; display: flex; justify-content: center; align-items: center; }
.div3 { grid-area: 2 / 2 / 3 / 3; background-color: #00dc82; }
</style>
