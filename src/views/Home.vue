<template>
  <div
    class="relative bg-brand-green home-bg"
    :class="{'home-bg-corner':isAsideModalOpen,
             'home-bg-green':isOnBreak
    }"
  >
    <div
      :class="[isAsideModalOpen ? 'left-[calc(100%-80px)] transform -translate-x-full' :' left-[120px]']"
      class="absolute top-[120px] flex duration-300"
    >
      <the-counter />
      <div
        :class="{'hidden':isAsideModalOpen}"
        class="transform translate-y-12 ml-[150px]"
      >
        <template v-if="!isOnBreak">
          <todo-item
            v-for="todo in filterdTodo"
            :id="todo.id"
            :key="todo.id"
            :is-done="todo.isDone"
            :class="style.todo"
            :content="todo.content"
            :show-control-button="false"
            @update:isDone="checkTodo(todo.id)"
          />
        </template>
        <div
          v-else
          class="text-brand-gray"
        >
          <p class="text-8xl leading-normal font-bold">
            休息，
          </p>
          <p class="text-4xl leading-normal">
            是為了下一次的努力
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Counter from '@/components/Counter.vue'
import TodoItem from '@/components/TodoItem.vue'
import useTodo from '@/hooks/useTodo'
import { computed, defineComponent } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    TheCounter: Counter,
    TodoItem
  },
  setup () {
    const { todoList: filterdTodo, checkTodo } = useTodo()

    const store = useStore()
    const isAsideModalOpen = computed(() => store.state.isAsideModalOpen)
    const isOnBreak = computed(() => store.state.isOnBreak)

    const style = {
      todo: 'first:transform first:scale-[1.66] first:translate-x-[33%] first:relative first:-left-2 first:font-bold'
    }

    return { filterdTodo, style, isAsideModalOpen, isOnBreak, checkTodo }
  }
})
</script>

<style lang="scss" scoped>
.home-bg{
  background-image: url('~@/assets/tomato--orange.svg');
  background-position: 50% 100%;
  background-repeat: no-repeat;
  transition: background-position 0.3s ease;

  &.home-bg-green{
    background-image: url('~@/assets/tomato--green.svg');
  }

  &.home-bg-corner{
    background-position: calc(100% + 460px) 100%;
  }
}
</style>
