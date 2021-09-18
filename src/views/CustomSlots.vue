
<template>
    <h1>Aprendiendo slots</h1>
    <button @click="openModal">Abrir Modal</button>


    <modal
        v-if="isOpen"
        title="Hola mundo"
        @on:close="closeModal"
    >
        <template v-slot:body>
            <p>hi</p>
        </template>
        <template v-slot:footer>
            <button @click="closeModal">Salir</button>
        </template>
        <template v-slot:header>
            <h2>Titulo del modal</h2>
        </template>


        <template v-slot:exposed="slotProps">
            <h2>{{ slotProps }}</h2>
        </template>
    </modal>
</template>




/*  */
<script>
import { ref } from 'vue'
import Modal from '@/components/Modal'
export default{
    components: { Modal },
    setup() {
    //
        const isOpen = ref( false )
        return {
            isOpen,
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false,
        }
    }
}
</script>




/*  */
<style scoped>
    
</style>


