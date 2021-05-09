import { Middleware } from '@nuxt/types'

const modal: Middleware = async ({ route, store, $content }): Promise<void> => {
  const { fullPath } = route

  let activeModals = await $content('modal')
    .where({ includeInPages: { $contains: [fullPath] } })
    .fetch()

  activeModals = activeModals.concat(
    await $content('modal')
      .where({ includeInDailyMenus: { $contains: [fullPath] } })
      .fetch()
  )

  await store.dispatch('handleActiveModals', {
    activeModals,
  })
}

export default modal
