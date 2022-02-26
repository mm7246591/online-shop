import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Member from "../components/Member";
import Signup from "../components/Signup";
const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Hot",
        name: "Item",
        component: Home,
    },
    {
        path: "/Discount",
        name: "Discount",
        component: Home,
    },
    {
        path: "/Season",
        name: "Season",
        component: Home,
    },
    {
        path: "/Member",
        name: "Member",
        component: Member,
    },
    {
        path: "/Member/Signup",
        name: "Signup",
        component: Signup,
    },
    {
        path: "/Favorite",
        name: "Favorite",
        component: Home,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;