import { createApp } from "vue";

import router from "./router.js";
import store from "@/store/index.js";

import App from "./App.vue";
import BaseCard from "@/components/ui/BaseCard.vue";

const app = createApp(App);

app.component("base-card", BaseCard);

app.use(router);
app.use(store);
app.mount("#app");
