import Vue from 'vue';
import Vuex from 'vuex';

import registerUser from './modules/registerUser';
import login from './modules/login';
import post from './modules/post';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        device: 'desktop',
        isLoading: false,
        activeUser: localStorage.getItem("userActive") || null,
        dataUser: {
            name: localStorage.getItem("userName") || ''
        }
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
        },
        setDataUser(state, dataUser) {
            state.dataUser = dataUser;
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
        setDataUser({ commit }, dataUser) {
            commit('setDataUser', dataUser);
        },
    },
    getters: {
        device: state => {
            return state.device
        },
        isLoading: (state) => state.isLoading,
        activeUser: (state) => state.activeUser,
        dataUser: (state) => state.dataUser,
    },
    modules: {
        registerUser,
        login,
        post
    },
});

export default store;
