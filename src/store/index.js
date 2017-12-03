import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import user from './modules/user'
import shared from './modules/shared'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        user,
        shared
    }
})