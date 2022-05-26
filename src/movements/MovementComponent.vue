<template>
  <div class="w-full bg-black">
    <p>{{ movement.id }}</p>
    <p>{{ movement.product }}</p>
    <p>{{ movement.price }}</p>
    <p>{{ movement.date }}</p>
  </div>
</template>

<script setup>
import { toRefs, defineProps } from "vue";

const props = defineProps({
  movement: Object,
});

const { movement } = toRefs(props);
</script>
