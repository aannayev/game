import { createApp } from "vue";
import router from "./routing";
import App from "./App.vue";
import store from "./store/index";

const app = createApp(App);
app.use(router);
app.use(store);

app.mount("#app");
