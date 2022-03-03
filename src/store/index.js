import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            count: 1,
        };
    },
    mutations: {
        increment(state, payload) {
            state.count += payload;
        },
    },
    actions: {
        increment({ commit }) {
            commit("increment");
        },
    },
});
export default store;