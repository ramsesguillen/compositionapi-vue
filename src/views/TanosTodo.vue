<template>
    <h1>Lista de tareas de Thanos</h1>
    <h2>Pendientes: {{pending.length}}</h2>

    <button
        @click="openModal"
    >
        Agregar tarea
    </button>

    <modal v-if="isOpen" title="todos">
        <template v-slot:header>
            <h2>Nueva tarea</h2>
        </template>
        <template v-slot:body>
            <form
                @submit.prevent="addTodo( text )"
            >
                <input
                    type="text"
                    v-model="text"
                    placeholder="Escribe una tarea y presiona enter">
            </form>
        </template>
        <template v-slot:footer>
            <button @click="closeModal">Salir</button>
        </template>
    </modal>
    <hr>

    <button
        :class="{ 'active': currentTab === 'all'}"
        @click="currentTab='all'"
    >
        Todos
    </button>
    <button
        :class="{ 'active': currentTab === 'pending'}"
        @click="currentTab='pending'"
    >
        Pendientes
    </button>
    <button
        :class="{ 'active': currentTab === 'completed'}"
        @click="currentTab='completed'"
    >
        completados
    </button>


    <div>
        <ul>
            <li v-for="todo in getTodosByTab" :key="todo.id"
                :class="{ 'completed' : todo.completed}"
                @dblclick="toogleTodo(todo.id)"
            >
                {{ todo.text }}
            </li>
        </ul>
    </div>

</template>




/*  */
<script>
import { ref } from 'vue'
import useTodos from '@/composables/useTodos'
import Modal from '@/components/Modal'


export default {
    components: { Modal },
    setup() {
        const isOpen = ref( false )
        const text = ref('')

        const { currentTab,
            pending,
            all,
            completed,
            getTodosByTab,
            toogleTodo,
            addTodo
        } = useTodos()


        return {
            text,
            isOpen,
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false,
            currentTab,
            pending,
            all,
            completed,
            getTodosByTab,
            addTodo,
            toogleTodo
        }
    }
}
</script>




/*  */
<style scoped>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ul {
        width: 300px;
        text-align: left;
    }

    li {
        cursor: pointer;
    }

    .active {
        background-color: #2c3e50;
        color: white;
    }

    .completed {
        text-decoration: line-through;
    }
    button {
        padding: 10px 20px;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease-in;
    }
    button:hover {
        background-color: #2c3e50;
        color: white;
    }
    button:active {
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
</style>