import { Module } from 'vuex'

export interface ITodoItem {
  id: number
  content: string,
  isDone: boolean,
  created: number,
}

const GET_TODOS = 'GET_TODOS'
const ADD_TODO = 'ADD_TODO'
const EDIT_TODO = 'EDIT_TODO'
const DELETE_TODO = 'DELETE_TODO'
const CHECK_TODO = 'CHECK_TODO'

export const todo: Module<any, any> = {
  state: (): { todoList: Array<ITodoItem> } => ({
    todoList: []
  }),
  mutations: {
    [GET_TODOS] (state, todos = []) {
      state.todoList = [...todos]
    },
    [ADD_TODO] (state, todo) {
      state.todoList.push(todo)
      localStorage.setItem('todo', JSON.stringify(state.todoList))
    },
    [EDIT_TODO] (state, { id, content }) {
      const todo = state.todoList.find((todo: ITodoItem) => todo.id === id)
      todo.content = content
      localStorage.setItem('todo', JSON.stringify(state.todoList))
    },
    [DELETE_TODO] (state, { id }) {
      const todoList = state.todoList
      const index = todoList.findIndex((todo: ITodoItem) => todo.id === id)
      todoList.splice(index, 1)
      localStorage.setItem('todo', JSON.stringify(todoList))
    },
    [CHECK_TODO] (state, { id }) {
      const todo = state.todoList.find((todo: ITodoItem) => todo.id === id)
      todo.isDone = !todo.isDone
      localStorage.setItem('todo', JSON.stringify(state.todoList))
    }
  },
  actions: {
    getTodos ({ commit }): void {
      const todoStr = localStorage.getItem('todo') || '[]'
      const todos = JSON.parse(todoStr)
      commit(GET_TODOS, todos)
    },
    addTodo ({ commit }, todo): void {
      commit(ADD_TODO, todo)
    },
    editTodo ({ commit }, payload) {
      commit(EDIT_TODO, payload)
    },
    deleteTodo ({ commit }, id) {
      commit(DELETE_TODO, id)
    },
    checkTodo ({ commit }, id) {
      commit(CHECK_TODO, id)
    }
  },
  namespaced: true
}
