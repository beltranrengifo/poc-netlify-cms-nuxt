<template>
  <section class="container flex-col">
    <h1 class="text-4xl">{{ content.title }}</h1>
    <h2 class="text-2xl">{{ content.description }}</h2>
    <ul>
      <n-link
        v-for="item in content.menu"
        :key="item.to"
        :to="item.to"
        class="block underline"
      >
        {{ item.text }}
      </n-link>
      <li>...</li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Restaurant',

  async asyncData({ $content, params }): Promise<Object> {
    const content = await $content('page', params.slug).fetch()

    return { content }
  },
})
</script>
