import { createWebHistory, createRouter } from "vue-router";
import Home from './pages/home.vue'
import Contact from './pages/contact.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router