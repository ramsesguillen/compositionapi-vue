<template>
    <h2 v-if="isLoading">Espere por favor</h2>
    <h2 v-else>Usuarios</h2>
    <h5 v-if="errorMessage !== ''">{{ errorMessage }}</h5>

    <div v-if="users.length > 0">
        <user-list :users="users" v-slot="{ user }">
            <h4>{{ user.first_name }}</h4>
            <h6>{{ user.email }}</h6>
        </user-list>
    </div>

    <button @click="prevPage">Atras</button>
    <button @click="nextPage">Sigueinte</button>
    <span>{{ currentPage }}</span>
</template>




/*  */
<script>
import useUsers from '../composables/useUsers'
import UserList from '../components/UserList'


export default {
    components: { UserList },
    setup() {

        const {  users, errorMessage, isLoading, nextPage, prevPage, currentPage } = useUsers()

        return {
            users,
            errorMessage,
            currentPage,
            isLoading,
            nextPage,
            prevPage
        }
    }
}
</script>




/*  */
<style scoped>
    h2 {
        text-align: center;
        width: 100%;
    }

    div {
        display: flex;
        justify-content: center;
    }
    ul {
        width: 250px
    }
</style>