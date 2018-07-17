import Vue from 'vue'
import Vuex from 'vuex'
import { state } from '@/store/state'
import { mutations } from '@/store/mutations'
import { getters } from '@/store//getters'
import { actions } from '@/store//actions'

Vue.use(Vuex)

// splitting the core sections of the store (state, mutations, actions and getters) into files will make the store more
// readable and won't overwhelm the main store file with 10s and 100s lines of code
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
