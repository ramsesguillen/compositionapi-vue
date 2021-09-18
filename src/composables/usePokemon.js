import { ref } from 'vue'
import axios from 'axios'



//
const usePokemon = ( pokemonId =  '1' ) => {

    const pokemon = ref('1')
    const isLoading = ref(false)
    const errorMessage = ref(null)

    const searchPockemon = async ( id ) => {
        if ( !id ) return

        isLoading.value = true
        pokemon.value = null

        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ id }`)
            pokemon.value = data
            errorMessage.value = null
        } catch (error) {
            errorMessage.value = 'No se pudo cargar ese pokémon'
        }

        isLoading.value = false
    }

    searchPockemon( pokemonId )

    return {
        pokemon,
        isLoading,
        errorMessage,
        searchPockemon
    }
}


export default usePokemon
