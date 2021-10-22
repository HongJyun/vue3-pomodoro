<template>
  <div class="mt-7 mr-10 text-brand-white text-opacity-50">
    <span class="mr-7">{{ fullDate }}</span>
    <span>{{ day }} {{ fullTime }}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, ref } from 'vue'

const getFullDate = (timestamp:Date) => {
  const yy = timestamp.getFullYear()
  const mm = timestamp.getMonth().toString().padStart(2, '0')
  const dd = timestamp.getDate().toString().padStart(2, '0')
  return `${yy}.${mm}.${dd}`
}

export default defineComponent({
  setup () {
    const now:Date = new Date()
    const fullDate = getFullDate(now)

    type dayOptions = {
        [key: number]: string
    }
    const map:dayOptions = { 0: '星期日', 1: '星期一', 2: '星期二', 3: '星期三', 4: '星期四', 5: '星期五', 6: '星期六' }
    const day:string = map[now.getDay()]

    const currentTime = ref(now)
    const timer = setInterval(() => {
      currentTime.value = new Date()
    }, 1000)

    onBeforeUnmount(() => {
      clearInterval(timer)
    })

    const fullTime = computed(() => {
      const fullTime = currentTime.value.getHours() + ':' + currentTime.value.getMinutes()
      return fullTime
    })

    return { fullDate, day, fullTime }
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
}
</style>
