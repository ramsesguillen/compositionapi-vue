<template>
    <ul>
        <!-- <li v-for="user in users" :key="user.id">
            <h4>{{ user.first_name }}</h4>
            <h6>{{ user.email }}</h6>
            <h1>hola list</h1>
        </li> -->
        <slot
            v-for="user in users"
            :key="user.id"
            :user="user"
            ></slot>
    </ul>
</template>




/*  */
<script>
export default {
    props: {
        users: {
            type: Array,
            required: true
        }
    }
}
</script>




/*  */
<style scoped>
    ul{
        list-style: none;
    }
</style>