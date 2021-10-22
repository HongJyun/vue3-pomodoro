import { ref, Ref, inject, computed } from 'vue'
import { useStore } from 'vuex'

export default function (name:string) {
  const store = useStore()

  const activeModal = inject<Ref<string>>('acitveModal')

  const canModalOpen = ref(false)

  const isModalOpen = computed(
    {
      get () {
        return canModalOpen.value && activeModal?.value === name
      },
      set (val:boolean) {
        canModalOpen.value = val
        if (activeModal) {
          if (val) {
            activeModal.value = name
          } else {
            activeModal.value = ''
          }
        }
      }
    }
  )

  const toggleModal = () => {
    isModalOpen.value = !isModalOpen.value
  }
  return { isModalOpen, toggleModal }
}
