import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LabsView from "../views/LabsView.vue";
import ForTeachersView from "../views/ForTeachersView.vue";
import PartnersView from "../views/PartnersView.vue";
import ModernSchoolView from "../views/ModernSchoolView.vue";
import HybridLab from "../views/HybridLabView.vue";
import GamesLab from "../views/GamesLabView.vue";
import AppsLab from "../views/AppsLabView.vue";

const routes = [
  {
    path: "",
    name: "home",
    component: HomeView
  },
  {
    path: "/openlaby/",
    name: "openlaby",
    component: LabsView
  },
  {
    path: "/hybridlab/",
    name: "hybridlab",
    component: HybridLab
  },
  {
    path: "/gameslab/",
    name: "gameslab",
    component: GamesLab
  },
  {
    path: "/appslab/",
    name: "appslab",
    component: AppsLab
  },
  {
    path: "/pre-ucitelov/",
    name: "pre-ucitelov",
    component: ForTeachersView
  },
  {
    path: "/partneri/",
    name: "partneri",
    component: PartnersView
  },
  {
    path: "/moderna-skola/",
    name: "moderna-skola",
    component: ModernSchoolView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
