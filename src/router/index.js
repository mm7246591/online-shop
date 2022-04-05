import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home";
import HomeItem from "../views/Home/HomeItem";
import Men from "../views/Men/Men";
import MenItem from "../views/Men/MenItem";
import Women from "../views/Women/Women";
import WomenItem from "../views/Women/WomenItem";
import Kids from "../views/Kids/Kids";
import KidsItem from "../views/Kids/KidsItem";
import User from "../views/User/User";
import Signin from "../views/User/Signin";
import Signup from "../views/User/Signup";
import Favorite from "../views/Favorite";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/:name",
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
        path: "/men/:name",
        name: "MenItem",
        component: MenItem,
        props: true,
    },
    {
        path: "/women",
        name: "Women",
        component: Women,
    },
    {
        path: "/women/:name",
        name: "WomenItem",
        component: WomenItem,
        props: true,
    },
    {
        path: "/kids",
        name: "Kids",
        component: Kids,
    },
    {
        path: "/kids/:name",
        name: "KidsItem",
        component: KidsItem,
        props: true,
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
            JSON.stringify(router.currentRoute._value.fullPath)
        );
        return { name: "Signin" };
    }
});
export default router;