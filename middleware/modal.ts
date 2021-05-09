import { Middleware } from '@nuxt/types'

const modal: Middleware = ({ route, store }) => {
  const { getModals: modals } = store.getters
  console.log(route, modals)
  store.dispatch('handleModal', { showModal: true, content: { pepe: 'pepe' } })
}

export default modal
