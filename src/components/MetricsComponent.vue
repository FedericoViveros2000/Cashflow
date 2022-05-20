<template>
  <section class="p-5 h-3/4 bg-white shadow-2xl shadow-black">
    <div class="w-full flex flex-col py-5">
      <div
        class="w-4/12 self-center bg-slate-500 rounded-full py-1 px-2"
        @click="showMetrics"
      ></div>
      <p class="text-2xl text-blue-color font-bold">Historial</p>
    </div>
    <slot></slot>
  </section>
</template>

<script setup>
import { defineEmits } from "vue";
const emit = defineEmits(["showMetrics"]);
const showMetrics = () => {
  emit("showMetrics");
};
</script>
