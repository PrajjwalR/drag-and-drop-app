import { createRouter, createWebHistory } from "vue-router";

import StartGame from "@/components/StartGame.vue";

const routes = [
  {
    path: "/startgame",
    name: "startgame",
    component: StartGame,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
