import { Middleware } from '@nuxt/types'

const checkModalVisibilityForRoute = ({
  fullPath,
  modals,
}: {
  fullPath: string
  modals: any
}) => {
  console.log({ fullPath, modals })
  return true
}

const modal: Middleware = async ({ route, store, $content }): Promise<void> => {
  const { getModals: modals } = store.getters
  const { fullPath } = route

  const activeModals = await $content('modal')
    .where({ includeInPages: { $in: [fullPath] } })
    .fetch()

  console.log(activeModals)

  store.dispatch('handleModal', {
    activeModals,
  })
}

export default modal
