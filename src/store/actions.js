import * as types from './mutation-types'

export const setCurrentUser = ({ commit }, user) => {
    commit(types.SET_CURRENT_USER, {
        user
    })
}