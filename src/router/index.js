import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";

import NotFound from "../views/404.vue";
import MovieDetails from "@/views/MovieDetails.vue";

const routes = [
    {
        path: "/",
        name: "Home page",
        component: HomeView,
    },
    {
        path: "/movie/:id",
        name: "Movie Details",
        component: MovieDetails
    },
    //redirect
    {
        path: "/home",
        redirect: "/",
    },
    {
        path: "/:catchAll(.*)",
        name: "Not Found",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.name;
    next();
});

export default router;
