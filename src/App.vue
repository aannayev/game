<template>
  <main class="main">
    <router-view></router-view>
  </main>
</template>

<script>
import "normalize.css";

export default {};
</script>

<style>
@import url(./assets/fonts/stylesheet.css);
body {
  background: url("./assets/images/bg.png");
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
