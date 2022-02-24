import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Main from "../views/Main";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Hot",
        name: "Main",
        component: Main,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;