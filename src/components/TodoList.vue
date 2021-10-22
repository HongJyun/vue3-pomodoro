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
      <header class="mb-10 flex justify-between items-center">
        <span class="text-[40px] text-brand-gray">代辦清單</span>
        <div>
          <span class="text-brand-gray text-opacity-50 mr-10">未完成</span>
          <span class="text-brand-gray">已完成</span>
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
          v-for="todo of todoList"
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
import { defineComponent } from 'vue'
import AsideSlideModal from '@/components/AsideSlideModal.vue'
import TodoItem from '@/components/TodoItem.vue'
import useTodo from '@/hooks/useTodo'
import useAsideModal from '@/hooks/useAsideModal'

export default defineComponent({
  components: {
    TodoItem,
    AsideSlideModal
  },
  setup () {
    const { isModalOpen, toggleModal } = useAsideModal('todo-list')
    const { todoList, inputValue, addTodo, editTodo, deleteTodo, checkTodo } = useTodo()

    return { todoList, inputValue, addTodo, editTodo, deleteTodo, isModalOpen, toggleModal, checkTodo }
  }
})
</script>

<style lang="scss" scoped>
.modal-shodow{
  box-shadow: 0px 0px 40px #0000003D;
}
</style>
