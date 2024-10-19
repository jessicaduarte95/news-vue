import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        device: 'desktop',
    },
    mutations: {
        toggleDevice(state, value) {
            console.log('toggleDeviceMutation', value);
            state.device = value;
        }
    },
    actions: {
        toggleDevice({ commit }, value) {
            console.log('toggleDevice', value);
            commit('toggleDevice', value);
        }
    },
    getters: {
        device: state => {
            return state.device
        }
    }
});
