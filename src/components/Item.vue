<template>
    <tr>
        <!-- TODO Sustituir los datos por el JSON correcto -->
        <th scope="row"> <img :src='item.img' alt="">  </th>
        <td>{{ item.name }}</td>
        <td>{{ item.desc}}</td>
        <td >{{ item.cantidad }} </td>
        <td >
            <div class="row d-flex justify-content-around">
                <button class="btn btn-info col-4" @click="increase(item.id)"> + </button>
                <button class="btn btn-danger col-4" @click="decrease(item.id)"> - </button>
            </div>
        </td>
        <td>{{item.price}} € </td>
        <td >{{ totalPrice() }} €</td>
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

        return { increase, decrease, firebasedb,}
    },
    methods:{
        totalPrice(){
            var total = (this.item.price * this.item.cantidad).toFixed(2)
            return total
        }
    }
}
</script>
<style scoped>
img{
    width: 350px;
}

</style>