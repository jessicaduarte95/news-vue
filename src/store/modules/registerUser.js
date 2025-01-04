import UsersSevice from "../../services/users.service";

const state = {}
const mutations = {}
const actions = {
    createUser: async ({ commit }, { payload, vm }) => {
        try {
            commit('setLoading', true, { root: true });
            const { data } = await UsersSevice.createUser(payload)
            vm.$buefy.notification.open({
                message: 'Cadastro realizado com sucesso!',
                type: 'is-success'
            })
            return data
        } catch (error) {
            commit('setLoading', false, { root: true });
            vm.$buefy.notification.open({
                message: 'Erro ao realizar cadastro! Tente novamente mais tarde.',
                type: 'is-danger'
            })
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
