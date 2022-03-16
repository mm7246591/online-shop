import { createStore } from "vuex";
import { itemsEvent, errorsEvent } from "../api/api";
const store = createStore({
    state() {
        return {
            items: [],
            errors: [],
            status: false,
            isLoading: false,
        };
    },
    getters: {
        // items: (state) => {
        //     return state.items;
        // },
        // status: (state) => {
        //     return state.status;
        // },
        // isLoading: (state) => {
        //     return state.isLoading;
        // },
        // errors: (state) => {
        //     return state.errors;
        // },
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
        async getErrors({ commit }) {
            try {
                commit("GET_ERRORS", await errorsEvent());
            } catch (err) {
                console.error(err);
            }
        },

        updateLoading({ commit }) {
            commit("LOADING", store.state);
        },
    },
    mutations: {
        GET_DATA(state, payload) {
            state.items = payload.items;
        },
        GET_ERRORS(state, payload) {
            state.errors = payload;
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