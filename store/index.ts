import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  modals: [] as any,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getModals({ modals }): String {
    return modals
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, { $content }) {
    try {
      const modals = await $content('modal').fetch()
      commit('SET_MODALS', modals)
      return true
    } catch (e) {
      console.info(e)
      return false
    }
  },
}

export const mutations: MutationTree<RootState> = {
  SET_MODALS(state, payload) {
    state.modals = [...payload]
  },
}
