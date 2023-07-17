import { createStore } from "vuex";

import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

const store = createStore({
  state() {
    return {
      games: [
        {
          route: "game-1",
          image: require("../assets/images/game4.png"),
          key: "1",
        },
        {
          route: "game-2",
          image: require("../assets/images/game3.png"),
          key: "2",
        },
        { route: "", image: require("../assets/images/game1.png"), key: "3" },
        { route: "", image: require("../assets/images/game1.png"), key: "4" },
        { route: "", image: require("../assets/images/game1.png"), key: "5" },
        { route: "", image: require("../assets/images/game1.png"), key: "6" },
      ],
      point: 0,
      moneyfirststart: 1000000,
      initialbet: 100,

      moneyWin: 0,

      symbols: [
        { name: "cherry", image: "images/2.png" },
        { name: "lemon", image: "images/3.png" },
        { name: "orange", image: "images/1.png" },
        { name: "apple", image: "images/4.png" },
        { name: "pineapple", image: "images/5.png" },
        { name: "banana", image: "images/6.png" },
        { name: "tree", image: "images/7.png" },
        { name: "flower", image: "images/8.png" },
        { name: "bread", image: "images/9.png" },
      ],
      slots: [{ symbol: "" }, { symbol: "" }, { symbol: "" }],
      totalMoney: 100000,
      points: 0,
      bet: 100,
      winner: false,
      isSpinning: false,
      autoPlay: false,
      autoSpinInterval: null,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
},);

export default store;
