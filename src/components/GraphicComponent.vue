<template>
  <div
    class="w-full flex flex-col justify-between items-center leading-10 p-5 text-lg outline-none"
  >
    <section class="text-center">
      <p class="text-xl my-4">Ahorro total</p>
      <p
        :class="{ 'text-green-color': number > 0, 'text-red-500': number < 0 }"
        class="font-bold text-5xl"
      >
        {{ new Intl.NumberFormat("en-US").format(number) }}
      </p>
    </section>
    <div class="w-full h-1/2 bg-blue-color rounded-lg"></div>
    <button class="bg-blue-color w-full py-3 rounded-full text-white">
      Agregar Movimiento
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const number = ref(10000);
</script>
