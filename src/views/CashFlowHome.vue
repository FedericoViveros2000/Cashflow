<template>
  <div class="h-full">
    <div class="h-4/5">
      <graphic-component></graphic-component>
    </div>
    <metrics-component class="rounded-t-md p-4"></metrics-component>
  </div>
</template>
<script setup>
import GraphicComponent from "@/components/GraphicComponent.vue";
import MetricsComponent from "@/components/MetricsComponent.vue";
</script>
