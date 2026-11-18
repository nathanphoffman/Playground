import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import About from "./About.vue";
import Home from "./Home.vue";
import User from "./User.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/users/:id", component: User },        // :id is a route parameter
    { path: "/old-about", redirect: "/about" },
  ],
});

// Navigation guard: runs before every route change (the place for login checks).
router.beforeEach((to) => {
  console.log("going to", to.fullPath);
});

createApp(App).use(router).mount("#app");
