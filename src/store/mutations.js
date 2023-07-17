export default {
  setSlots(state, slots) {
    state.slots = slots;
  },
  setTotalMoney(state, totalMoney) {
    state.totalMoney = totalMoney;
  },
  setPoints(state, points) {
    state.points = points;
  },
  setBet(state, bet) {
    state.bet = bet;
  },
  setWinner(state, winner) {
    state.winner = winner;
  },
  setIsSpinning(state, isSpinning) {
    state.isSpinning = isSpinning;
  },
  setAutoPlay(state, autoPlay) {
    state.autoPlay = autoPlay;
  },
  setAutoSpinInterval(state, interval) {
    state.autoSpinInterval = interval;
  },
  reduceBet(state) {
    if (state.bet > 0) {
      state.bet -= 100;
    }
  },
  increaseBet(state) {
    state.bet += 100;
  },
};
