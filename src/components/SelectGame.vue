<template>
  <game-header></game-header>
  <section class="select">
    <div class="games">
      <ul class="list">
        <li v-for="item in counters" :key="item.key">
          <router-link :to="item.route ? 'game/' + item.route : '/game-select'">
            <img :src="item.image" alt="" />
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import GameHeader from "./GameHeader.vue";
export default {
  components: {
    GameHeader,
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, from.next);
    if (from.name === "accept") {
      next(false);
    } else {
      next(true);
    }
  },

  computed: {
    counters() {
      return this.$store.getters.getGames;
    },
    teamslink() {
      return "/game/" + this.id;
    },
  },
};
</script>

<style scoped>
.select {
  max-width: 1200px;
  margin: 0 auto;
  overflow: scroll;
  overflow-y: hidden;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.select::-webkit-scrollbar {
  display: none;
}

.games {
  margin: 56px;
}
.list {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  column-gap: 20px;
}
li {
  cursor: pointer;
}
</style>
