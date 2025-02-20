import PostSevice from "../../services/post.service";

const state = {}
const mutations = {}
const actions = {
    createPost: async ({ commit }, { payload, vm }) => {
        try {
            commit('setLoading', true, { root: true });
            const { data } = await PostSevice.createPost(payload)
            vm.$buefy.notification.open({
                message: 'Post cadastrado com sucesso!',
                type: 'is-success'
            })
            return data
        } catch (error) {
            commit('setLoading', false, { root: true });
            vm.$buefy.notification.open({
                message: 'Erro ao criar post! Tente novamente mais tarde.',
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