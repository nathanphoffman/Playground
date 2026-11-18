import { createApp } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import App from "./App.vue";

const vuetify = createVuetify({ components, directives });  // registers every component; import only what you use in real apps
createApp(App).use(vuetify).mount("#app");
