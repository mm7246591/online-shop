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
        path: "/hot",
        name: "Item",
        component: Home,
    },
    {
        path: "/discount",
        name: "Discount",
        component: Home,
    },
    {
        path: "/season",
        name: "Season",
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
        component: Home,
    },
    {
        path: "/new",
        name: "NewItem",
        component: Home,
    },
    {
        path: "/hotstore",
        name: "HotStore",
        component: Home,
    },
    {
        path: "/onsale",
        name: "OnSale",
        component: Home,
    },
    // Tops
    {
        path: "/tops/shortsleeve",
        name: "ShortSleeve",
        component: Home,
    },
    {
        path: "/tops/sleeveless",
        name: "Sleeveless",
        component: Home,
    },
    {
        path: "/tops/longsleeveless",
        name: "LongSleeveless",
        component: Home,
    },
    {
        path: "/tops/shirt",
        name: "Shirt",
        component: Home,
    },
    {
        path: "/tops/hoodie",
        name: "Hoodie",
        component: Home,
    },
    {
        path: "/tops/knitwear",
        name: "Knitwear",
        component: Home,
    },
    // Bottoms
    {
        path: "/bottoms/shorts",
        name: "Shorts",
        component: Home,
    },
    {
        path: "/bottoms/jeans",
        name: "Jeans",
        component: Home,
    },
    {
        path: "/bottoms/pants",
        name: "Pants",
        component: Home,
    },
    {
        path: "/bottoms/anklepants",
        name: "AnklePants",
        component: Home,
    },
    {
        path: "/bottoms/dresspants",
        name: "DressPants",
        component: Home,
    },
    {
        path: "/bottoms/skirts",
        name: "Skirts",
        component: Home,
    },
    // One piece
    {
        path: "/onepiece/dresses",
        name: "Dress",
        component: Home,
    },
    {
        path: "/onepiecs/suit",
        name: "Suit",
        component: Home,
    },
    {
        path: "/onepiecs/jumpsuits",
        name: "JumpSuits",
        component: Home,
    },
    // Outwear
    {
        path: "/outwear/casual",
        name: "Casual",
        component: Home,
    },
    {
        path: "/outwear/coat",
        name: "Coat",
        component: Home,
    },
    {
        path: "/outwear/blazer",
        name: "Blazer",
        component: Home,
    },
    {
        path: "/outwear/downjacket",
        name: "DownJacket",
        component: Home,
    },
    // Accessories
    {
        path: "/accessories/earrings",
        name: "Earrings",
        component: Home,
    },
    {
        path: "/accessories/necklace",
        name: "Necklace",
        component: Home,
    },
    {
        path: "/accessories/hat",
        name: "Hat",
        component: Home,
    },
    {
        path: "/accessories/belt",
        name: "Belt",
        component: Home,
    },
    {
        path: "/accessories/shoes",
        name: "Shoes",
        component: Home,
    },
    {
        path: "/accessories/bags",
        name: "Bags",
        component: Home,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;