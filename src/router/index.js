import { createRouter, createWebHistory } from "vue-router";
import MainComponent from "../views/home.vue";
import Elections from "../views/elections.vue";
import Join from "../views/join.vue";
import About from "../views/about.vue";
import rules from "../views/rules.vue";
import members from "../views/members.vue";

const routes = [
  {
    path:'/',
    name:'MainComponent',
    component:MainComponent
  },
  {
    path:"/Home",
    name:"Home",
    component:MainComponent
  },
  {
    path:'/Elections',
    name:'Elections',
    component: Elections
  },
  {
    path: '/Join',
    name: "Join",
    component: Join
  },
  {
    path: '/About',
    name: "About",
    component: About,
  },
  {
    path: '/rules',
    name: "rules",
    component: rules,
  },
  {
    path: '/members',
    name: "members",
    component: members,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
