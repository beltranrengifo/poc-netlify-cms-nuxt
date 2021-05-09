<template>
  <section class="container flex-col">
    <h1 class="text-4xl">{{ title }}</h1>
    <h2 class="text-2xl">{{ description }}</h2>
    <ul>
      <n-link
        v-for="item in menu"
        :key="item.to"
        :to="item.to"
        class="block underline"
      >
        {{ item.text }}
      </n-link>
      <li>...</li>
    </ul>
    <n-link to="/" class="block underline">Home</n-link>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',

  async asyncData({ $content }): Promise<Object> {
    const { menu, title, description } = await $content(
      'page',
      'contact'
    ).fetch()

    return { menu, title, description }
  },
})
</script>
