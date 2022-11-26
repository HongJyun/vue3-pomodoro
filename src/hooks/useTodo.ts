import { onBeforeMount, ref, computed } from 'vue'
import { useStore } from 'vuex'

import { ITodoItem } from '@/store/todo'

export default function () {
  const store = useStore()

  const inputValue = ref('')

  const todoList = computed(() => store.state.todo.todoList)

  onBeforeMount(() => {
    getTodos()
  })

  const getTodos = () => {
    store.dispatch('todo/getTodos')
  }

  const addTodo = () => {
    if (!inputValue.value.length) return
    const todo: ITodoItem = {
      id: Math.floor((Math.random() * 1000)),
      content: inputValue.value,
      isDone: false,
      created: Date.now()
    }

    store.dispatch('todo/addTodo', todo)
    inputValue.value = ''
  }

  const editTodo = (id: number, content: string) => {
    if (!content.length) return
    store.dispatch('todo/editTodo', { id, content })
  }

  const deleteTodo = (id: number) => {
    store.dispatch('todo/deleteTodo', { id })
  }

  const checkTodo = (id: number) => {
    store.dispatch('todo/checkTodo', { id })
  }

  return { todoList, inputValue, addTodo, editTodo, deleteTodo, checkTodo }
}
