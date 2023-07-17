export default {
  spinSlots({ state, commit }) {
    if (state.totalMoney >= state.bet && !state.isSpinning) {
      commit("setIsSpinning", true);

      const newSlots = state.slots.map(() => {
        const randomIndex = Math.floor(Math.random() * state.symbols.length);
        const symbol = state.symbols[randomIndex].name;
        return { symbol };
      });

      commit("setSlots", newSlots);

      if (
        newSlots[0].symbol === newSlots[1].symbol &&
        newSlots[1].symbol === newSlots[2].symbol
      ) {
        const winAmount = state.bet * 5;
        commit("setTotalMoney", state.totalMoney + winAmount);
        commit("setWinner", true);
      } else {
        commit("setWinner", false);
      }

      commit("setTotalMoney", state.totalMoney - state.bet);
      commit("setPoints", state.points + 50);

      commit("setIsSpinning", false);
    }
  },
  toggleAutoPlay({ state, commit }) {
    if (state.autoPlay) {
      clearInterval(state.autoSpinInterval);
    } else {
      const interval = setInterval(() => {
        this.dispatch("spinSlots");
      }, 1000);
      commit("setAutoPlay", true);
      commit("setAutoSpinInterval", interval);
    }
    commit("setAutoPlay", !state.autoPlay);
  },
};
