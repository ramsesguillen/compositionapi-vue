<template>
    <h1>Counter</h1>
    <h3>{{ counter }}</h3>

    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
</template>




/*  */
<script>
// import { ref } from 'vue'
import useCounter from '@/composables/useCounter'

export default {
    name: 'Counter',
    props: {},
    emits: [],
    setup() {

        const { counter, increase, decrease } = useCounter(10)

        return {
            counter, increase, decrease
        }
    }
}
</script>




/*  */
<style scoped>
    
</style>