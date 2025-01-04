import Vue from 'vue';
import Vuex from 'vuex';

import registerUser from './modules/registerUser';
import login from './modules/login';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        device: 'desktop',
        isLoading: false,
        activeUser: false
    },
    mutations: {
        setDevice(state, device) {
            state.device = device;
        },
        setLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
        setActiveUser(state, activeUser) {
            state.activeUser = activeUser;
        }
    },
    actions: {
        toggleDevice({ commit }, device) {
            commit('setDevice', device);
        },
        setLoading({ commit }, isLoading) {
            commit('setLoading', isLoading);
        },
        setActiveUser({ commit }, activeUser) {
            commit('setActiveUser', activeUser);
        },
    },
    getters: {
        device: state => {
            return state.device
        },
        isLoading: (state) => state.isLoading,
        activeUser: (state) => state.activeUser,
    },
    modules: {
        registerUser,
        login
    },
});

export default store;
