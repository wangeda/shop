<template>
    <tr>
        <!-- TODO Sustituir los datos por el JSON correcto -->
        <th scope="row"> <img :src='item.thumbnailUrl' alt="">  </th>
        <td>{{ item.title }}</td>
        <td>{{ item.desc}}</td>
        <td >{{ item.cantidad }} </td>
        <td >
            <button class="btn btn-info btn-sm" @click="increase(item.id)"> + </button>
            <button class="btn btn-danger btn-sm" @click="decrease(item.id)"> - </button>
        </td>
        <td>{{item.precio}} € </td>
        <td >{{ item.precio * item.cantidad }} €</td>
      </tr>
</template>
<script>
import { useStore } from 'vuex'
import { firestore } from './../firebase/config'
export default {
    props: [ 'item' ],
    setup(){
        const firebasedb = firestore
        const store = useStore()
        const increase = id => { store.commit('increaseItem', id) }
        const decrease = id => { store.commit('decreaseItem', id) }
        return { increase, decrease, firebasedb }
    },
}
</script>
<style scoped>
img{
    width: 250px;
}
</style>