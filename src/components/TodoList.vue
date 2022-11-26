<template>
  <div
    :class="{'bg-white':isModalOpen}"
    class="p-5"
  >
    <img
      src="@/assets/icon-list.svg"
      alt="list"
      @click="toggleModal"
    >
    <aside-slide-modal
      :is-modal-open="isModalOpen"
    >
      <header class="mb-10 flex justify-between items-center flex-wrap lg:flex-nowrap">
        <span class="text-[40px] text-brand-gray">代辦清單</span>
        <div>
          <span
            v-for="(label, key) in filters"
            :key="key"
            :class="{'text-opacity-50': key + '' !== filter}"
            class="text-brand-gray first:mr-10 cursor-pointer"
            @click="filter = key + ''"
          >{{ label }}</span>
        </div>
      </header>
      <section class="p-2 flex justify-between bg-white w-full rounded-[182px] overflow-hidden">
        <input
          v-model.trim="inputValue"
          maxlength="30"
          class="p-2 flex-grow focus:outline-none"
          type="text"
          placeholder="新增代辦事項"
        >
        <button
          class="w-12 h-10 bg-brand-orange rounded-[71px]"
          @click="addTodo"
        >
          <i class="icon-plus text-white" />
        </button>
      </section>
      <section class="mt-10">
        <todo-item
          v-for="todo of filteredTodo"
          :id="todo.id"
          :key="todo.id"
          :is-done="todo.isDone"
          :content="todo.content"
          class="border-t border-opacity-20 border-white last:border-b"
          @update:content="editTodo(todo.id,$event)"
          @update:isDone="checkTodo(todo.id)"
          @delete="deleteTodo(todo.id)"
        />
      </section>
    </aside-slide-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AsideSlideModal from '@/components/AsideSlideModal.vue'
import TodoItem from '@/components/TodoItem.vue'
import useTodo from '@/hooks/useTodo'
import useAsideModal from '@/hooks/useAsideModal'
import { computed } from '@vue/reactivity'
import { ITodoItem } from '@/store/todo'

export default defineComponent({
  components: {
    TodoItem,
    AsideSlideModal
  },
  setup () {
    const { isModalOpen, toggleModal } = useAsideModal('todo-list')
    const { todoList, inputValue, addTodo, editTodo, deleteTodo, checkTodo } = useTodo()

    const filter = ref('0')
    const filters = {
      0: '未完成',
      1: '已完成'
    }
    const filteredTodo = computed(() => todoList.value.filter((todo: ITodoItem) => todo.isDone === !!+filter.value))
    return { filter, filters, filteredTodo, inputValue, addTodo, editTodo, deleteTodo, isModalOpen, toggleModal, checkTodo }
  }
})
</script>

<style lang="scss" scoped>
.modal-shodow{
  box-shadow: 0px 0px 40px #0000003D;
}
</style>
