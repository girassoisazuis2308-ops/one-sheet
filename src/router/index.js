import { createRouter, createWebHashHistory } from "vue-router"
import Player from "../views/Player.vue"
import Master from "../views/Master.vue"

const routes = [
  { path: "/", redirect: "/player" },
  { path: "/player", component: Player },
  { path: "/master", component: Master }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
