<template>
  <ul class="w-[80px] flex flex-col justify-center items-center bg-[#E8E8E8]">
    <todo-list />
    <analysis-modal />
  </ul>
</template>

<script>
import { defineComponent, provide, ref, watchEffect } from 'vue'
import TodoList from '@/components/TodoList'
import AnalysisModal from '@/components/AnalysisModal'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    TodoList,
    AnalysisModal
  },
  setup () {
    const acitveModal = ref('')
    provide('acitveModal', acitveModal)

    const store = useStore()
    watchEffect(() => {
      const isAsideOpen = acitveModal.value !== ''
      store.dispatch('toggleAsideModal', isAsideOpen)
    })
  }
})
</script>
