import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  modals: [] as any,
  modalContent: {} as object,
  showModal: false as boolean,
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
      return false
    }
  },

  handleModal({ commit }, { showModal, content }) {
    commit('SET_MODAL_VISIBILITY', showModal)
    commit('SET_MODAL_CONTENT', content)
  },
}

export const mutations: MutationTree<RootState> = {
  SET_MODALS(state, payload) {
    state.modals = [...payload]
  },

  SET_MODAL_VISIBILITY(state, payload) {
    state.showModal = payload
  },
  SET_MODAL_CONTENT(state, payload) {
    state.modalContent = { ...payload }
  },
}
