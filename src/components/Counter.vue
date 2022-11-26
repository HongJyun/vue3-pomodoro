<template>
  <div class="flex flex-col items-center w-full">
    <span class="text-[80px] lg:text-[200px] text-brand-gray leading-tight font-FjallaOne font-medium">{{ time }}</span>
    <section class="flex items-center">
      <img
        class="p-4 border-2 border-brand-gray rounded-full cursor-pointer"
        src="@/assets/icon-bell.svg"
        alt="bell"
      >
      <div
        v-if="isCountDown"
        class="mx-4 flex justify-center items-center w-12 h-12 bg-brand-gray rounded-full cursor-pointer"
        @click="stop"
      >
        <img
          class="mx-4 bg-brand-gray rounded-full cursor-pointer"
          src="@/assets/icon-pause--orange.svg"
          alt="play"
        >
      </div>

      <div
        v-else
        class="mx-4 flex justify-center items-center w-12 h-12 bg-brand-gray rounded-full cursor-pointer"
        @click="start"
      >
        <img
          src="@/assets/icon-play--orange.svg"
          alt="play"
        >
      </div>
      <img
        class="p-4 border-2 border-brand-gray rounded-full cursor-pointer"
        src="@/assets/icon-cancel.svg"
        alt="cancel"
        @click="cancel"
      >
    </section>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'

const WORKING = 'WORKING'
const BREAKING = 'BREAKING'

const duration = {
  [WORKING]: 25 * 60,
  [BREAKING]: 5 * 60
}

export default defineComponent({
  setup () {
    const countdown = ref(duration[WORKING])
    const timer = ref<number|undefined>(undefined)

    const store = useStore()
    const isOnBreak = computed(() => store.state.isOnBreak)

    const start = ():void => {
      if (timer.value) return
      timer.value = setInterval(() => {
        countdown.value--
        if (countdown.value <= 0) {
          stop()
          changeState()
        }
      }, 1000)
    }
    const stop = ():void => {
      clearInterval(timer.value)
      timer.value = undefined
    }

    const cancel = ():void => {
      clearInterval(timer.value)
      timer.value = undefined
      countdown.value = duration[WORKING]
      if (isOnBreak.value) {
        store.dispatch('toggleBreak')
      }
    }

    const changeState = () => {
      if (isOnBreak.value) {
        countdown.value = duration[WORKING]
      } else {
        countdown.value = duration[BREAKING]
      }
      store.dispatch('toggleBreak')
      start()
    }

    const time = computed(() => {
      const minutes:number = Math.floor(countdown.value / 60)
      const seconds:number = countdown.value % 60
      return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
    })

    const isCountDown = computed(() => {
      return !!timer.value
    })

    return { time, start, stop, cancel, isCountDown, timer }
  }
})
</script>
