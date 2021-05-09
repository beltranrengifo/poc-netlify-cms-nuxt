import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  activeModals: [] as any,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getActiveModals({ activeModals }): String {
    return activeModals
  },
}

export const actions: ActionTree<RootState, RootState> = {
  handleActiveModals({ commit }, { activeModals }) {
    commit('SET_ACTIVE_MODALS', activeModals)
  },
}

export const mutations: MutationTree<RootState> = {
  SET_ACTIVE_MODALS(state, payload) {
    state.activeModals = payload
  },
}
