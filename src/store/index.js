import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default createStore({
  state: {
    todos: [
      { id: '1', text: 'Recolectar las priedras del infinito', completed: false },
      { id: '2', text: 'Piedra del alma', completed: true },
      { id: '3', text: 'Piedra de poder', completed: true },
      { id: '4', text: 'Piedra de realiada', completed: false },
      { id: '5', text: 'Consegir nuevos secuaces competentes', completed: false },
    ]
  },
  mutations: {
    toogleTodo( state, id ) {
      const todoIdx = state.todos.findIndex( todo => todo.id === id)
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed
    },
    createTodo( state, text = '' ) {
      if ( text.length <= 1 ) return

      state.todos = [{ id: uuidv4(), completed: false, text },...state.todos]
    }
  },
  actions: {
  },
  getters: {
    pendingTodos( state) {
      return state.todos.filter( todo => !todo.completed )
    },
    allTodos( state) {
      return state.todos
    },
    completedTodos( state) {
      return state.todos.filter( todo => todo.completed )
    },
    getTodosByTab: ( _, getters ) => (tab) => {
      switch ( tab ) {
        case 'all': return getters.allTodos
        case 'pending': return getters.pendingTodos
        case 'completed': return getters.completedTodos
      }
    }
  },
  modules: {
  }
})
