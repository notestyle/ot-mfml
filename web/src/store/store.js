import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        is_loading: false
    },

    getters: {
        get_is_loading: state => {
            return state.is_loading;
        },
    },
    
    mutations: {
        set_loading_status: (state, is_loading) => {
            state.is_loading = is_loading;
        },
    },

    actions: {
        set_loading_status: (context, is_loading) => {
            context.commit("set_loading_status", is_loading);
        },
    }
});