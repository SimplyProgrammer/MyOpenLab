import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LabsView from "../views/LabsView.vue";
import ForTeachersView from "../views/ForTeachersView.vue";
import PartnersView from "../views/PartnersView.vue";
import ModernSchoolView from "../views/ModernSchoolView.vue";
import HybridLab from "../views/HybridLabView.vue";
import GamesLab from "../views/GamesLabView.vue";
import AppsLab from "../views/AppsLabView.vue";

function route(path, component, name) {
    return {path, component, name: name ?? path.slice(1, -1)};
}

const routes = [
	route("", HomeView, "home"),
	route("/openlaby/", LabsView),
	route("/hybridlab/", HybridLab),
	route("/gameslab/", GamesLab),
	route("/appslab/", AppsLab),
	route("/pre-ucitelov/", ForTeachersView),
	route("/partneri/", PartnersView),
	route("/moderna-skola/", ModernSchoolView),
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
