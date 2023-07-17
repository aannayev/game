<template>
  <game-header></game-header>
  <section >
    <div class="game" style="position: absolute;top:50%;left: 50%;transform: translate(-50%,-50%)">
      <div class="doors">
        <div v-for="(slot, index) in slots" :key="index" class="door">
          <div class="boxes">
          </div>
        </div>
      </div>
    </div>
  </section>
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
import GameHeader from "./GameHeader";

export default {

  data() {
    return {
      lastIcons: [
        [],
        [],
        []
      ],
      lastAnswer: [],
      isSpinning: false,
      winner: false
    }
  },

  components: {
    GameHeader,
  },

  computed: {
    slots() {
      return this.$store.state.slots;
    },
    items() {
      return this.$store.state.symbols
    },
    doors() {
      return document.querySelectorAll(".door")
    },
    bet() {
      return this.$store.state.bet;
    },

    winnerAmount() {
      return this.$store.state.bet * 5;
    },

    autoPlay() {
      return this.$store.state.autoPlay;
    },
  },
  methods: {
    shuffle([...arr]) {
      let m = arr.length;
      while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
      }
      return arr;
    },
    // eslint-disable-next-line no-unused-vars
    init(firstInit = true, groups = 1, duration = 1) {
      const context = this
      this.lastAnswer = []
      const doors = this.doors
      for (let index = 0; index < doors.length; index++) {
        const door = doors[index];
        const boxesList = door.querySelectorAll('.boxes');
        for (const boxes of boxesList) {
          const boxesClone = boxes.cloneNode(false);

          const pool = [...this.shuffle(this.items)];


          boxesClone.addEventListener(
              'transitionstart',
              function () {
                door.dataset.spinned = '1';
                this.querySelectorAll('.box').forEach((box) => {
                  box.style.filter = 'blur(1px)';
                });
              },
              {once: true}
          );

          boxesClone.addEventListener(
              'transitionend',
              function () {
                this.querySelectorAll('.box').forEach((box, index) => {
                  box.style.filter = 'blur(0)';
                  if (index === 1) {
                    context.lastAnswer.push(box.id)
                  }
                  if (index > 2) this.removeChild(box);
                });
                context.calculateAnswer()
              },
              {once: true}
          );


          let lastThree = []

          for (let i = pool.length - 1; i >= 0; i--) {
            const box = document.createElement('div');
            const img = document.createElement("img")
            img.src = pool[i].image
            box.classList.add('box');
            box.style.width = door.clientWidth + 'px';
            box.style.height = '20vh';
            box.style.maxHeight = "110px"
            box.appendChild(img)
            box.id = pool[i].name
            boxesClone.appendChild(box);
            if (lastThree.length < 3) {
              if (firstInit) {
                if (i < 3) lastThree.push(pool[i])
              } else
                lastThree.push(pool[i])
            }
          }
          for (let i = 0; i <= this.lastIcons[index].length - 1; i++) {
            const box = document.createElement('div');
            const img = document.createElement("img")
            img.src = this.lastIcons[index][i].image
            box.classList.add('box');
            box.style.width = door.clientWidth + 'px';
            box.style.height = '20vh';
            box.style.maxHeight = "110px"
            box.appendChild(img)
            box.id = this.lastIcons[index][i].name
            boxesClone.appendChild(box);
          }
          console.log(boxesClone.style.height)
          this.lastIcons[index] = lastThree
          let heigth = document.documentElement.clientHeight * 0.2;
          heigth = heigth > 110 ? 110 : heigth
          boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
          console.log((Math.ceil(boxesClone.clientHeight / 3)) * (firstInit ? pool.length - 3 : pool.length))
          boxesClone.style.transform = `translateY(-${(heigth * (firstInit ? pool.length - 3 : pool.length))}px)`;
          door.replaceChild(boxesClone, boxes);
        }
      }
    },
    async spin() {
      this.isSpinning = true
      this.init(false, 1, 2)
      for (const door of this.doors) {
        const boxes = door.querySelector('.boxes');
        const duration = parseInt(boxes.style.transitionDuration);
        boxes.style.transform = 'translateY(0)';
        await new Promise((resolve) => setTimeout(resolve, duration * 100))
      }
    },
    calculateAnswer() {
      if (this.lastAnswer.length === this.slots.length) {
        this.isSpinning = false
        if (this.lastAnswer[0] === this.lastAnswer[1] === this.lastAnswer[2]) {
          this.winner = true
          const winAmount = this.$store.state.bet * 5;
          this.$store.commit("setTotalMoney", this.$store.state.totalMoney + winAmount);
          this.$store.commit("setWinner", true);
        } else {
          this.winner = false
        }
        this.$store.commit("setTotalMoney", this.$store.state.totalMoney - this.$store.state.bet);
        this.$store.commit("setPoints", this.$store.state.points + 50);

      }
    },
    increaseBet() {
      this.$store.commit("increaseBet");
    },
    reduceBet() {
      this.$store.commit("reduceBet");
    },
    toggleAuto() {
      this.$store.dispatch("toggleAutoPlay");
    },
  },
  mounted() {
    this.init(true, 1, 2)
  }
};
</script>

<style>
.game {
  background: rgba(21, 9, 31, 0.73);
  border: 1px solid #ffe600;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  max-height: 330px;
  display: flex;
  height: 60vh;
  align-items: center;
  justify-content: center;
}

.boxes {
  /* transform: translateY(0); */
  transition: transform 1s ease-in-out;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
}

.doors {
  display: flex;
}

.door {
  width: 100px;
  max-height: 330px;
  height: 60vh;
  overflow: hidden;
  border-radius: 5px;
  margin: 5px;
}

</style>
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
    border-radius: 10px;
    width: 86px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 7px 14px;
    gap: 37px;


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
  border-radius: 10 p;
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
