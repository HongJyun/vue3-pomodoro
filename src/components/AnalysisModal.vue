<template>
  <div
    :class="{'bg-white':isModalOpen}"
    class="p-5"
  >
    <img
      src="@/assets/icon-analysis.svg"
      alt="analysis"
      @click="toggleModal"
    >
    <aside-slide-modal
      :is-modal-open="isModalOpen"
    >
      <header class="mb-10 flex justify-between items-center">
        <span class="text-[40px] text-brand-gray">專注度分析</span>
      </header>
      <section class="flex justify-between flex-wrap lg:flex-nowrap">
        <analysis-status-box
          title="今日"
          sub-title="2019.03.03"
        />
        <analysis-status-box title="本週" />
      </section>
    </aside-slide-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AsideSlideModal from '@/components/AsideSlideModal.vue'
import AnalysisStatusBox from '@/components/AnalysisStatusBox.vue'
import useAsideModal from '@/hooks/useAsideModal'

export default defineComponent({
  components: {
    AsideSlideModal,
    AnalysisStatusBox
  },
  setup () {
    const { isModalOpen, toggleModal } = useAsideModal('AnalysisModal')

    return { isModalOpen, toggleModal }
  }
})
</script>

<style lang="scss" scoped>
.modal-shodow{
  box-shadow: 0px 0px 40px #0000003D;
}
</style>
