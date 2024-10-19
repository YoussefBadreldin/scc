import { createRouter, createWebHistory } from "vue-router";
import MainComponent from "../views/home.vue";


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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
