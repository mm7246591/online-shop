import { createStore } from "vuex";
import { getItems } from "../api/api";
const store = createStore({
    state() {
        return {
            items: [],
            isLoading: false,
        };
    },
    getters: {
        items: (state) => {
            return state.items;
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
            try {
                commit("GET_DATA", await getItems());
            } catch (err) {
                console.error(err);
            }
        },
    },
    mutations: {
        GET_DATA(state, payload) {
            state.isLoading = !state.isLoading;
            state.items = payload.items;
        },
    },
});
export default store;