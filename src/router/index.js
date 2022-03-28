import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import HomeItem from "../views/HomeItem";
import Men from "../views/Men";
import MenItem from "../views/MenItem";
import Women from "../views/Women";
import WomenItem from "../views/WomenItem";
import Kids from "../views/Kids";
import KidsItem from "../views/KidsItem";
import User from "../views/User.vue";
import Signin from "../views/Signin";
import Signup from "../views/Signup";
import Favorite from "../views/Favorite";
// import store from "../store";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/:id",
        name: "HomeItem",
        component: HomeItem,
        props: true,
    },
    {
        path: "/men",
        name: "Men",
        component: Men,
    },
    {
        path: "/men/:id",
        name: "MenItem",
        component: MenItem,
    },
    {
        path: "/women",
        name: "Women",
        component: Women,
    },
    {
        path: "/women/:id",
        name: "WomenItem",
        component: WomenItem,
    },
    {
        path: "/kids",
        name: "Kids",
        component: Kids,
    },
    {
        path: "/kids/:id",
        name: "KidsItem",
        component: KidsItem,
    },
    {
        path: "/user",
        name: "User",
        component: User,
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
        meta: {
            requiresAuth: true,
        },
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
router.beforeEach((to) => {
    const token = localStorage.getItem("Authorization");
    if ((to.meta.requiresAuth && token === null) || token === "") {
        // 檢查是否登入，如果沒有重新定向到登入頁面
        // 儲存當前的路由，等使用者登入後會自動導回這路由
        localStorage.setItem(
            "preRoute",
            JSON.stringify(router.currentRoute._value.name)
        );
        return { name: "Signin" };
    }
});
export default router;