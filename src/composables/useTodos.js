import { useStore } from 'vuex'
import { computed, ref } from 'vue'


//
const useTodos = () => {

    const store = useStore()
    const currentTab = ref('all')

    const toogleTodo = (id) => {
        store.commit('toogleTodo', id )
    }

    const addTodo = ( text ) => {
        store.commit('createTodo',text)
    }

    return {
        currentTab,
        pending: computed( () => store.getters['pendingTodos']),
        all: computed( () => store.getters['allTodos']),
        completed: computed( () => store.getters['completedTodos']),
        getTodosByTab: computed( () => store.getters['getTodosByTab'](currentTab.value)),
        toogleTodo,
        addTodo
    }
}


export default useTodos
