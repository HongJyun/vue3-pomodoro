<template>
  <div>
    <h6 class="mb-4 text-brand-gray">
      {{ title }} <span class="ml-6 text-brand-gray text-opacity-50">{{ subTitle }}</span>
    </h6>
    <div class="flex justify-evenly w-[256px] h-[165px] border border-opacity-20 rounded-lg">
      <div class="relative flex-grow text-center  divider">
        <span class="text-[80px] text-brand-light-green font-FjallaOne">{{ unDone }}</span>
        <p class="text-brand-gray font-NotoSansTC">
          代辦事項
        </p>
      </div>
      <div class="flex-grow text-center">
        <span class="text-[80px] text-brand-orange font-FjallaOne">{{ done }}</span>
        <p class="text-brand-gray font-NotoSansTC">
          代辦事項
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    unDone: {
      type: Number,
      default: 0
    },
    done: {
      type: Number,
      default: 0
    }
  }
})
</script>

<style lang="scss" scoped>
.divider::after {
  @apply absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-20;

  content: '';
  width: 1px;
  height: 80%;
}
</style>
