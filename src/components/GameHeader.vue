<template>
  <header>
    <div class="container">
      <div class="icon icon_star">
        <img src="../assets/images/Group.png" alt="" />
      </div>
      <div class="point">{{ points }}/9000</div>
    </div>
    <div class="container">
      <div class="icon icon_money">
        <img src="../assets/images/Group(1).png" alt="" />
      </div>
      <div class="money">{{ totalMoney }}</div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    totalMoney() {
      return this.$store.state.totalMoney;
    },
    points() {
      return this.$store.state.points;
    },
  },
};
</script>

<style>
header {
  height: 70px;
  width: 100%;
  background: linear-gradient(180deg, #8000ff 0%, #9e00ff 40.42%, #61009c 100%);
  border-bottom: 2px solid #913bff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px -11px 19px rgba(56, 0, 112, 0.63);
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 90px;
}
.icon {
  position: absolute;
  left: 0;
}
.container {
  position: relative;
  display: flex;
  background: #370063;
  border: 1px solid #ffb800;
  box-shadow: inset 0px 4px 3px rgba(32, 0, 65, 0.91);
  border-radius: 18.5px;
  align-items: center;
  justify-content: center;
  padding: 12px 45px;
  max-width: 241px;
  width: 100%;
}
.money,
.point {
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  font-family: "Impact";
  letter-spacing: 0.05em;
}

.point {
  background: linear-gradient(180deg, #0066ff 0%, #bd00ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.money {
  background: linear-gradient(180deg, #ebff00 0%, #ffa800 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.icon_star {
  transform: scale(1.1);
  bottom: 0;
}
.icon_money {
  bottom: 10px;
  left: 20px;
  transform: scale(1.3);
}
</style>
