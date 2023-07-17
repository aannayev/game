<template>
  <div id="app">
    <div id="slots">
      <div
        v-for="slot in slots"
        :key="slot.id"
        :class="['slot', slot.symbol]"
      ></div>
    </div>
    <div id="buttons">
      <button @click="spin" :disabled="isSpinning">Spin</button>
      <button @click="toggleAuto" :disabled="isSpinning">
        {{ autoPlay ? "Stop" : "Auto" }}
      </button>
    </div>
    <div id="scoreboard">
      <span>Balance: {{ balance }}</span>
      <span v-if="winningAmount > 0">WIN {{ winningAmount }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      symbols: ["cherry", "lemon", "orange", "plum", "bell", "bar", "seven"],
      slots: [],
      balance: 1000000,
      bet: 0,
      winningAmount: 0,
      autoPlay: false,
      isSpinning: false,
      autoSpinInterval: null,
    };
  },
  mounted() {
    this.generateSlots();
  },
  methods: {
    generateSlots() {
      for (let i = 0; i < 3; i++) {
        this.slots.push({ id: i, symbol: "" });
      }
    },
    spin() {
      if (this.balance >= this.bet && !this.isSpinning) {
        this.isSpinning = true;

        this.balance -= this.bet;
        this.winningAmount = 0;

        this.slots.forEach((slot) => {
          const randomIndex = Math.floor(Math.random() * this.symbols.length);
          slot.symbol = this.symbols[randomIndex];
        });

        if (
          this.slots[0].symbol === this.slots[1].symbol &&
          this.slots[1].symbol === this.slots[2].symbol
        ) {
          const winAmount = this.bet * 5;
          this.balance += winAmount;
          this.winningAmount = winAmount;
        }

        this.isSpinning = false;
      }
    },
    toggleAuto() {
      if (this.autoPlay) {
        clearInterval(this.autoSpinInterval);
      } else {
        this.autoSpinInterval = setInterval(() => {
          this.spin();
        }, 1000);
      }
      this.autoPlay = !this.autoPlay;
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>
