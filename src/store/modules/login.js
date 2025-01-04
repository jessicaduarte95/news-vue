import LoginService from "../../services/login.service";

const state = {}
const mutations = {}
const actions = {
    login: async ({ commit }, payload) => {
        try {
            commit('setLoading', true, { root: true });
            const { data } = await LoginService.login(payload)
            return data
        } catch (error) {
            commit('setLoading', false, { root: true });
        } finally {
            commit('setLoading', false, { root: true });
        }
    }
}
const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

