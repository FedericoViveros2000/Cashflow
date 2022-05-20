<template>
  <div class="h-full">
    <div class="h-4/5">
      <graphic-component></graphic-component>
    </div>
    <metrics-component
      class="rounded-t-lg p-4 transition-transform duration-500 ease-linear"
      @showMetrics="show = !show"
      :class="{
        '-translate-y-3/4': show === true,
      }"
    >
      <div class="w-full h-4/5 overflow-auto">
        <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
        <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
        <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
        <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
        <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
        <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
        <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
        <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
        <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
        <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
        <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
        <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
        <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
        <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
        <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
        <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
        <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
        <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
        <p class="py-10 bg-red-900 rounded-lg p-5 my-5">Metricas</p>
      </div>
    </metrics-component>
  </div>
</template>
<script setup>
import GraphicComponent from "@/components/GraphicComponent.vue";
import MetricsComponent from "@/components/MetricsComponent.vue";
import { ref } from "vue";
const show = ref(false);
</script>
