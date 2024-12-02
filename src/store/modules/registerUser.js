import UsersSevice from "../../services/users.service";

const state = {}
const mutations = {}
const actions = {
    createUser: async ({ commit }, payload) => {
        try {
            commit('setLoading', true, { root: true });
            const { data } = await UsersSevice.createUser(payload)
            return data
        } catch (error) {
            commit('setLoading', false, { root: true });
            return;
        } finally {
            commit('setLoading', false, { root: true });
        }
    },
}
const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
