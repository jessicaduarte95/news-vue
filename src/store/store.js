import Vue from 'vue';
import Vuex from 'vuex';

import registerUser from './modules/registerUser';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        device: 'desktop',
        isLoading: false
    },
    mutations: {
        setDevice(state, device) {
            state.device = device;
        },
        setLoading(state, isLoading) {
            state.isLoading = isLoading;
        }
    },
    actions: {
        toggleDevice({ commit }, device) {
            commit('setDevice', device);
        },
        setLoading({ commit }, isLoading) {
            commit('setLoading', isLoading);
        },
    },
    getters: {
        device: state => {
            return state.device
        },
        isLoading: (state) => state.isLoading,
    },
    modules: {
        registerUser
    },
});

export default store;
