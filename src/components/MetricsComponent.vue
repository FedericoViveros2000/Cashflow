<template>
  <div
    class="w-full bg-slate-500 h-3/4 overflow-y-auto py-10"
    :class="{ '-translate-y-3/4': show === true }"
  >
    <p @click="mostrar">{{ show }}</p>
    <div class="mb-10">
      <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
      <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
      <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
      <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
      <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const show = ref(false);

const mostrar = () => {
  console.log(!show.value);
};
</script>
