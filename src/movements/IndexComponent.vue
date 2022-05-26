<template>
  <section class="p-5 bg-white shadow-2xl shadow-black">
    <div class="w-full flex flex-col py-5">
      <div
        class="w-4/12 self-center bg-slate-500 rounded-full py-1 px-2"
        @click="showMetrics"
      ></div>
      <p class="text-2xl text-blue-color font-bold">Historial</p>
    </div>
    <movement-component
      v-for="movement in movements"
      :movement="movement"
      :key="movement.id"
    >
    </movement-component>
  </section>
</template>

<script setup>
import MovementComponent from "./MovementComponent.vue";
import { defineEmits, reactive } from "vue";
const emit = defineEmits(["showMetrics"]);
const showMetrics = () => {
  emit("showMetrics");
};

let movements = reactive([
  {
    id: 1,
    product: "Supermercado",
    price: 100000,
    date: "12/04/2022",
  },
]);
</script>
