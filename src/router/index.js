import { createRouter, createWebHistory } from "vue-router";
import MainComponent from "../views/home.vue";
import Committees from "../views/committees.vue";
import Clubs from "../views/clubs.vue";
import Registration from "../views/registration.vue";
import Articles from "../views/articles.vue";
import Contact from "../views/contact.vue";

const routes = [
  {
    path: '/',
    name: 'MainComponent',
    component: MainComponent,
  },
  {
    path: '/Home',
    name: 'Home',
    component: MainComponent,
  },
  {
    path: '/Committees',
    name: 'Committees',
    component: Committees,
  },
  {
    path: '/Clubs',
    name: 'Clubs',
    component: Clubs,
  },
  {
    path: '/Registration',
    name: 'Registration',
    component: Registration,
  },
  {
    path: '/Articles',
    name: 'Articles',
    component: Articles,
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
