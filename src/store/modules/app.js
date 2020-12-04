export default {
  state: {
    user: null
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    }
  },
  actions: {
    SetUser({commit}, user) {
      commit('SET_USER', user)
    }
  }
}