import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Men from "../views/Men";
import Member from "../views/Member";
import Signup from "../views/Signup";
import Favorite from "../views/Favorite";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/men",
        name: "Men",
        component: Men,
    },
    {
        path: "/women",
        name: "Women",
        component: Home,
    },
    {
        path: "/kids",
        name: "Kids",
        component: Home,
    },
    {
        path: "/member",
        name: "Member",
        component: Member,
    },
    {
        path: "/member/signup",
        name: "Signup",
        component: Signup,
    },
    {
        path: "/favorite",
        name: "Favorite",
        component: Favorite,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;