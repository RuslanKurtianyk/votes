import firebase from 'firebase'
import * as types from '../../mutation-types'

const state = {
  user: null
}

const getters = {
  user: state => state.user
}

const actions = {
  signUserUp({ commit }, payload) {
    commit(types.SET_LOADING, true)
    commit(types.CLEAR_ERROR)
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        commit(types.SET_LOADING, false)
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }
        commit(types.SET_CURRENT_USER, newUser)
      })
      .catch(error => {
        commit(types.SET_LOADING, false)
        commit(types.SET_ERROR, error)
      })
  },
  signUserIn({ commit }, payload) {
    commit(types.SET_LOADING, true)
    commit(types.CLEAR_ERROR)
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        commit(types.SET_LOADING, false)
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }
        commit(types.SET_CURRENT_USER, newUser)
      })
      .catch(error => {
        commit(types.SET_LOADING, false)
        commit(types.SET_ERROR, error)
      })
  },
  signUserInGoogle({ commit }) {
    commit(types.SET_LOADING, true)
    commit(types.CLEAR_ERROR)
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(user => {
        commit(types.SET_LOADING, false)
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }
        commit(types.SET_CURRENT_USER, newUser)
      })
      .catch(error => {
        commit(types.SET_LOADING, false)
        commit(types.SET_ERROR, error)
      })
  },
  autoSignIn({ commit }, payload) {
    commit(types.SET_CURRENT_USER, {
      id: payload.uid,
      name: payload.displayName,
      email: payload.email,
      photoUrl: payload.photoURL
    })
  },
  logout({ commit }) {
    firebase.auth().signOut()
    commit(types.SET_CURRENT_USER, null)
  }
}

const mutations = {
  [types.SET_CURRENT_USER] (state, payload) {
    state.user = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
