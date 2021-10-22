import { createStore } from 'vuex'
import { todo } from '@/store/todo'

interface State {
  isOnBreak: boolean
  isAsideModalOpen: boolean,
 }

export default createStore<State>({
  state: {
    isOnBreak: false,
    isAsideModalOpen: false
  },
  mutations: {
    TOGGLE_BREAK (state) {
      state.isOnBreak = !state.isOnBreak
    },
    TOGGLE_ASIDE_MODAL (state, flag) {
      state.isAsideModalOpen = flag
    }
  },
  actions: {
    toggleBreak ({ commit }) {
      commit('TOGGLE_BREAK')
    },
    toggleAsideModal ({ commit }, flag) {
      commit('TOGGLE_ASIDE_MODAL', flag)
    }
  },
  modules: {
    todo
  }
})
