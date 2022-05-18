<template>
  <div>
    <div class="flex justify-center items-center py-5">
      <figure class="w-8 h-8 mr-10">
        <img
          src="@/assets/cashflow-icon.svg"
          alt="Icono de la aplicacion"
          class="object-cover"
        />
      </figure>
      <h1 class="title-cashflow font-bold text-xl">
        <span class="text-green-color">Cash</span>flow
      </h1>
    </div>

    <Suspense>
      <cash-flow-home></cash-flow-home>
      <template #fallback>
        <loader-screen></loader-screen>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import CashFlowHome from "@/views/CashFlowHome.vue";
import LoaderScreen from "@/components/SplashScreen.vue";
</script>
