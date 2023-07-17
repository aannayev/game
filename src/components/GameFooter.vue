<template>
  <footer>
    <div class="bet">
      <button @click="reduceBet"><span>-</span></button>
      <div class="placeholder">
        <p>{{ bet }}</p>
      </div>
      <button @click="increaseBet"><span>+</span></button>
    </div>
    <div class="ifwin" v-if="winner">
      <p class="win">WIN</p>
      <p class="money">{{ winnerAmount }}</p>
    </div>
    <div class="play">
      <button
        class="auto"
        @click="toggleAuto"
        :disabled="isSpinning || autoPlay"
      >
        <span>{{ autoPlay ? "STOP" : "AUTO" }}</span>
      </button>
      <button class="spin" @click="spin" :disabled="isSpinning">
        <span>SPIN</span>
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    bet() {
      return this.$store.state.bet;
    },
    winner() {
      return this.$store.state.winner;
    },
    winnerAmount() {
      return this.$store.state.bet * 5;
    },
    isSpinning() {
      return this.$store.state.isSpinning;
    },
    autoPlay() {
      return this.$store.state.autoPlay;
    },
  },

  methods: {
    increaseBet() {
      this.$store.commit("increaseBet");
    },
    reduceBet() {
      this.$store.commit("reduceBet");
    },
    toggleAuto() {
      this.$store.dispatch("toggleAutoPlay");
    },
    spin() {
      this.$emit("spin")
      this.$store.dispatch("spinSlots");
    },
  },
};
</script>
<style scoped lang="scss">
footer {
  width: 100%;
  height: 70px;
  background: linear-gradient(180deg, #8000ff 0%, #9e00ff 40.42%, #61009c 100%);
  border-bottom: 2px solid #913bff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px -11px 19px rgba(56, 0, 112, 0.63);
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.bet {
  display: flex;
  flex-direction: row;
  gap: 13px;
  height: auto;
  button {
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background: radial-gradient(
      90.6% 83.7% at 50% 16.3%,
      #ff00e5 6.04%,
      #9501ff 100%
    );
    border: 1px solid rgba(255, 255, 255, 0.32);
    box-shadow: 0px 7px 5px rgba(92, 15, 255, 0.32),
      inset 0px 4px 1px rgba(241, 202, 255, 0.49);
    span {
      font-family: "Impact";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 0.05em;

      color: #ffffff;

      /* Shadow */
      text-shadow: 0px 2px 2px #330e4f;
    }
  }
  .placeholder {
    background: #320950;
    border-radius: 10p;
    width: 86px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 7px 14px;
    gap: 37px;

    width: 86px;

    background: #320950;
    border-radius: 10px;
    p {
      margin: 0;
      font-family: "Impact";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 0.05em;

      /* 1 */
      background: linear-gradient(180deg, #ebff00 0%, #ffa800 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;

      text-shadow: 0px 4px 10px rgba(250, 255, 0, 0.62);
    }
  }
}

.ifwin {
  background: #320950;
  border-radius: 10p;
  width: 189px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 7px 14px;
  gap: 37px;

  width: 86px;

  background: #320950;
  border-radius: 10px;
  p {
    margin: 0;
    font-family: "Impact";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;

    /* 1 */
    background: linear-gradient(180deg, #ebff00 0%, #ffa800 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    text-shadow: 0px 4px 10px rgba(250, 255, 0, 0.62);
  }
  p.win {
    background: linear-gradient(180deg, #ffffff 0%, #1dc9ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
}

.play {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  button {
    span {
      background: linear-gradient(180deg, #ffffff 0%, #1dc9ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      font-family: "Impact";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      align-items: center;
      letter-spacing: 0.05em;
    }
    box-sizing: border-box;

    /* Auto layout */
    display: flex;

    align-items: center;
    justify-content: center;
    padding: 11px 27px;
    gap: 10px;

    width: 99px;
    height: 46px;

    background: linear-gradient(
      180deg,
      #70ff00 0%,
      #bd00ff 0.01%,
      #005484 100%
    );
    border: 1px solid #00a3ff;
    box-shadow: 0px 4px 4px rgba(36, 255, 0, 0.27),
      inset 0px -6px 4px rgba(0, 163, 255, 0.26),
      inset 0px 4px 4px rgba(255, 247, 207, 0.65);
    border-radius: 11px;
  }
  .spin {
    background: linear-gradient(180deg, #70ff00 0%, #008405 100%);
    border: 1px solid #ffb800;
    box-shadow: 0px 4px 4px rgba(36, 255, 0, 0.27),
      inset 0px -6px 4px rgba(0, 255, 56, 0.26),
      inset 0px 4px 4px rgba(255, 247, 207, 0.65);
    span {
      background: linear-gradient(180deg, #ffffff 0%, #73ff1d 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
  .auto {
    span {
      background: linear-gradient(180deg, #ffffff 0%, #1dc9ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
}

button {
  cursor: pointer;
}
</style>
