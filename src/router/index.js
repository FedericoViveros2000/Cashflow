import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/CashFlowHome.vue";

const routes = [
  {
    path: "/",
    name: "CashFlowHome",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
