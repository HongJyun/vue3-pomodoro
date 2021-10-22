<template>
  <div class="w-screen h-screen flex">
    <the-header class="absolute top-0 right-0 z-10" />
    <aside-menu class="z-10 h-full flex-shrink-0" />
    <router-view class="w-full flex-grow" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import AsideMenu from './AsideMenu.vue'
import TheHeader from './TheHeader.vue'

export default defineComponent({
  components: {
    AsideMenu,
    TheHeader
  }
})
</script>
