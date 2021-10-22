<template>
  <teleport to="body">
    <transition
      enter-active-class="transition ease-out duration-300 transform"
      enter-from-class="-translate-x-full"
      leave-active-class="transition ease-in duration-300 transform"
      leave-to-class="-translate-x-full"
    >
      <div
        v-if="isModalOpen"
        class="absolute top-0 left-[80px] pt-20 px-10 w-[640px] h-screen bg-brand-green modal-shodow"
      >
        <slot />
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    isModalOpen: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss" scoped>
.modal-shodow{
  box-shadow: 0px 0px 40px #0000003D;
}
</style>
