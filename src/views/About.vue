<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-modal="name" ref="name">
    <button @click="add2DB(name)">Añadir</button>
  </div>
</template>

<script>
import {firestore} from '../firebase/config'
export default {
  setup() {
    const firestore = firestore
    return { firestore }
    },
    data() {
      return {
        name: "",
      }
    },
    methods: {
      add2DB(name) {
        firestore.collection('names').add({
          name: 'Mae'
        })
      }
    }
}
</script>