import { Middleware } from '@nuxt/types'

const modal: Middleware = async ({ route, store, $content }): Promise<void> => {
  const { fullPath } = route

  const activeModals = await $content('modal')
    .where({
      $or: [
        { includeInPages: { $contains: [fullPath] } },
        { includeInDailyMenus: { $contains: [fullPath] } },
      ],
    })
    .fetch()

  await store.dispatch('handleActiveModals', {
    activeModals,
  })
}

export default modal
