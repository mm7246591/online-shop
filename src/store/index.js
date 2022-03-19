import { createStore } from "vuex";
import { itemsEvent, errorsEvent } from "../api/api";
const store = createStore({
    state() {
        return {
            items: [],
            message: null,
            status: false,
            isLoading: false,
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
        async checkError({ commit }) {
            try {
                commit("CHECK_ERROR", await errorsEvent());
            } catch (err) {
                // console.error(err);
            }
        },
    },
    mutations: {
        GET_DATA(state, payload) {
            state.items = payload.items;
        },
        CHECK_ERROR(state, payload) {
            state.status = true;
            state.message = payload.message;
        },
        LOADING(state, status) {
            state.isLoading = status;
        },
        STATUS(state, payload) {
            state.status = payload;
        },
    },
});
export default store;