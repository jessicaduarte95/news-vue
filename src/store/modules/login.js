import LoginService from "../../services/login.service";

const state = {}
const mutations = {}
const actions = {
    login: async ({ commit }, { payload, vm }) => {
        try {
            commit('setLoading', true, { root: true });
            const { data } = await LoginService.login(payload)
            commit('setActiveUser', true, { root: true });
            const dataUser = {
                id: data.result._id,
                name: data.result.name,
                email: data.result.email
            }
            commit('setDataUser', dataUser, { root: true });
            return data
        } catch (error) {
            commit('setLoading', false, { root: true });
            vm.$buefy.notification.open({
                message: 'Erro ao realizar login! Tente novamente mais tarde.',
                type: 'is-danger'
            })
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

