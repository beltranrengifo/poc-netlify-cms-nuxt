import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  modals: [] as any,
  activeModals: [] as any,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getModals({ modals }): String {
    return modals
  },
}

export const actions: ActionTree<RootState, RootState> = {
  /* async nuxtServerInit({ commit }, { $content }) {
    try {
      const modals = await $content('modal').fetch()
      commit('SET_MODALS', modals)
      return true
    } catch (e) {
      return false
    }
  }, */

  handleModal({ commit }, { activeModals }) {
    commit('SET_ACTIVE_MODALS', activeModals)
  },
}

export const mutations: MutationTree<RootState> = {
  SET_MODALS(state, payload) {
    state.modals = [...payload]
  },

  SET_ACTIVE_MODALS(state, payload) {
    state.activeModals = { ...payload }
  },
}
