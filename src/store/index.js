import { createStore } from "vuex";
import { getItems } from "../api/api";
const store = createStore({
    state() {
        return {
            items: [],
        };
    },
    getters() {
        (state) => {
            return state.items;
        };
    },
    mutations: {
        GET_DATA(state, payload) {
            state.items = payload.items;
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
});
export default store;