import { createApp } from "vue";
import "@/scss/style.scss";
import App from "@/App.vue";
import { store } from "./store";

createApp(App).use(store).mount("#chat");
