<template>
  <div>
    <div class="flex py-10 lg:gap-10">
      <div class="w-[400px] lg:w-[700px] -translate-x-20">
        <div class="sticky top-28">
          <BlockDetailPageImage/>
        </div>
      </div>
      <div class="w-full">
        <BlockDetailPageMain :extras="extras" :options="options" :quantity="quantity"/>
      </div>
    </div>
    <div class="container lg:hidden mb-14">
      <div class="mb-10">
        <h2 class="text-2xl lg:text-3xl font-black mb-3">Beschrijving</h2>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis imperdiet massa faucibus lacinia nibh justo. Litora ultricies imperdiet sodales vitae mollis eu habitasse montes.
        </p>
      </div>
      <BlockDetailPageExtras :extras="extras"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const options = ref(['Medium 25cm', 'Large 29cm', 'Huge 34cm']);
const quantity = ref(['1', '2', '3', '4', '5']);

const extras = ref([
  {
    image: '/pepperoni.png',
    title: 'Pepperoni',
    price: '0,60'
  },
  {
    image: '/pepperoni.png',
    title: 'Pepperoni',
    price: '0,60'
  },
  {
    image: '/pepperoni.png',
    title: 'Pepperoni',
    price: '0,60'
  },
  {
    image: '/pepperoni.png',
    title: 'Pepperoni',
    price: '0,60'
  },
  {
    image: '/pepperoni.png',
    title: 'Pepperoni',
    price: '0,60'
  },
  {
    image: '/pepperoni.png',
    title: 'Pepperoni',
    price: '0,60'
  }
]);
</script>
