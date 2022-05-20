<template>
  <div class="h-screen overflow-hidden">
    <div class="flex justify-evenly items-center py-5">
      <figure class="w-8 h-8">
        <img
          src="@/assets/cashflow-icon.svg"
          alt="Icono de la aplicacion"
          class="object-cover"
        />
      </figure>
      <h1 class="title-cashflow font-bold text-2xl">
        <span class="text-green-color">Cash</span>flow
      </h1>
      <div></div>
    </div>

    <Suspense>
      <cash-flow-home></cash-flow-home>
      <template #fallback>
        <Transition
          enter-from-class="transition-opacity opacity-100 duration-300 ease-linear"
          leave-to-class="transition-opacity opacity-0 duration-500 ease-linear"
        >
          <loader-screen
            class="transition duration-300 ease-linear"
            v-if="mostrar"
          ></loader-screen>
        </Transition>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import CashFlowHome from "@/views/CashFlowHome.vue";
import LoaderScreen from "@/components/SplashScreen.vue";
</script>
