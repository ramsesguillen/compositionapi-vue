<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>

    <h2>{{ iroman }}</h2>
    <h2>{{ hulk }}</h2>

    <button @click="changeIroman">
      Iroman
    </button>
    <button @click="changeHulk">
      Hulk
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, reactive } from 'vue'

export default {
  name: 'Home',

  setup() {
  //
    const iroman = ref({ name: 'Tony', age: 50 })
    const hulk = reactive({ name: 'Tony', age: 50 })
  return {
      iroman,
      hulk,
      changeIroman: () => {
        iroman.value.name = 'Tony Start'
        iroman.value.age = '54'
      },
      changeHulk: () => {
        hulk.name = 'Brus Baner'
        hulk.age = '43'

      }
    }
  }
}
</script>
