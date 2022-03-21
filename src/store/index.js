import { createStore } from "vuex";
import { itemsEvent } from "../api/api";
const store = createStore({
    state() {
        return {
            items: [],
            signUpMessage: null,
            signInMessage: null,
            status: false,
            isLoading: false,
            username: null,
            Authorization: localStorage.getItem("Authorization") ?
                localStorage.getItem("Authorization") :
                null,
        };
    },
    getters: {
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
            commit("LOADING", true);
            try {
                commit("GET_DATA", await itemsEvent());
                await setTimeout(() => {
                    commit("LOADING", false);
                }, 500);
            } catch (err) {
                console.error(err);
            }
        },
    },
    mutations: {
        GET_DATA(state, payload) {
            state.items = payload.items;
        },
        LOADING(state, status) {
            state.isLoading = status;
        },
        GET_TOKEN(state, payload) {
            state.Authorization = payload;
            localStorage.setItem("Authorization", payload);
        },
    },
});
export default store;