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
    <ul>
      <n-link
        v-for="menu in menus"
        :key="menu.path"
        :to="menu.path"
        class="block underline"
      >
        {{ menu.title }}
      </n-link>
      <li>...</li>
    </ul>
    <n-link to="/contact" class="block underline">Contacto</n-link>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',

  async asyncData({ $content }): Promise<Object> {
    const content = await $content('page', 'home').fetch()

    const menus = await $content('menu').only(['title']).fetch()

    return { content, menus }
  },

  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
