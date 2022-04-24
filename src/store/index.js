import { createStore } from "vuex";
import { itemsEvent } from "../api/api";
const store = createStore({
    state() {
        return {
            items: [],
            isLoading: false,
            shoppingNum: JSON.parse(localStorage.getItem("ShoppingNum")) ?
                JSON.parse(localStorage.getItem("ShoppingNum")) :
                0,
            user: JSON.parse(localStorage.getItem("User")) ?
                JSON.parse(localStorage.getItem("User")) :
                "Guest",
            Authorization: localStorage.getItem("Authorization") ?
                localStorage.getItem("Authorization") :
                null,
        };
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        menItems(state) {
            return state.items.filter((item) => item.category.includes("男"));
        },
        womenItems(state) {
            return state.items.filter((item) => item.category.includes("女"));
        },
        kidItems(state) {
            return state.items.filter((item) => item.category.includes("兒童"));
        },
    },
    actions: {
        async getData({ commit }) {
            commit("MAINTAIN_USER", JSON.parse(localStorage.getItem("User")));
            commit("LOADING", true);
            try {
                commit("GET_DATA", await itemsEvent());
                await setTimeout(() => {
                    commit("LOADING", false);
                }, 300);
            } catch (err) {
                console.error(err);
            }
        },
    },
    mutations: {
        GET_DATA(state, payload) {
            state.items = payload.items;
        },
        LOADING(state, payload) {
            state.isLoading = payload;
        },
        SET_TOKEN(state, payload) {
            state.Authorization = payload;
            localStorage.setItem("Authorization", JSON.stringify(payload));
        },
        USER(state, payload) {
            state.user = payload;
            localStorage.setItem("User", JSON.stringify(payload));
        },
        MAINTAIN_USER(state, payload) {
            //將登入者的資料重新賦予state，防止重整後，資料遺失
            state.user = payload;
        },
        GET_SHOPPINGNUM(state, payload) {
            state.shoppingNum = payload;
            localStorage.setItem("ShoppingNum", JSON.stringify(payload));
        },
        DELETE_SHOPPINGNUM(state, payload) {
            let swap = state.shoppingNum;
            swap = swap - payload;
            localStorage.setItem("ShoppingNum", JSON.stringify(swap));
            state.shoppingNum = swap;
        },
    },
});
export default store;