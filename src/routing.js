import { createRouter, createWebHistory } from "vue-router";
import WelcomeScreen from "./components/WelcomeScreen.vue";
import SelectGame from "./components/SelectGame.vue";
import FirstGame from "./components/FirstGame.vue";
import GameTwo from "./components/GameTwo.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/accept" },
    { name: "accept", path: "/accept", component: WelcomeScreen },
    { name: "game", path: "/game-select", component: SelectGame },
    {
      name: "currect-game",
      path: "/game",
      children: [
        { path: "game-1", component: FirstGame },
        { path: "game-2", component: GameTwo },
      ],
    },
  ],
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

export default router;
