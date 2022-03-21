import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Men from "../views/Men";
import Women from "../views/Women";
import Kids from "../views/Kids";
import Signin from "../views/Signin";
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
        component: Women,
    },
    {
        path: "/kids",
        name: "Kids",
        component: Kids,
    },
    {
        path: "/user/signin",
        name: "Signin",
        component: Signin,
    },
    {
        path: "/user/signup",
        name: "Signup",
        component: Signup,
    },
    {
        path: "/favorite",
        name: "Favorite",
        component: Favorite,
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/",
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
router.beforeEach(() => {
    // let token = localStorage.getItem("Authorization");
    // console.log(token);
    // if (to.name !== "Signin" && !token) {
    //     return { name: "Signin" };
    // }
});
export default router;