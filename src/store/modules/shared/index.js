const state = {
  loading: false,
  error: null
}

const mutations = {
  setLoading(state, payload) {
    state.loading = payload
  },
  setError(state, payload) {
    state.error = payload
  },
  clearError(state) {
    state.error = null
  }
}
const actions = {
  clearError({ commit }) {
    commit('clearError')
  }
}

const getters = {
  loading(state) {
    return state.loading
  },
  error(state) {
    return state.error
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
