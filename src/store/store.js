import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        device: 'desktop',
    },
    mutations: {
        setDevice(state, device) {
            state.device = device;
        }
    },
    actions: {
        toggleDevice({ commit }, device) {
            commit('setDevice', device);
        }
    },
    getters: {
        device: state => {
            return state.device
        }
    }
});

export default store;
