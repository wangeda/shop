<template>
    <th scope="row" class="d-flex col-7 justify-content-end bg-light">
        <div class="col-3 " > Total Amount <span>{{totalAmount}}</span></div>
        <div class="col-3">
            <button class="btn btn-danger btn-sm" @click="clean"> Clean </button>
        </div>
        <div class="col-3">
            <button class="btn btn-success btn-sm" @click="makeOrder"> Buy </button>
        </div>
        <div class="col-3 font-weight-bold"><span> {{ totalPrice }} € </span></div>
    </th>

</template>

<script>
import { computed } from 'vue'
import {useStore} from 'vuex'
import numOrder from '../../composables/order'
import {auth} from '../../firebase/config'

export default {
    setup(props, context){
        const store = useStore()
        const totalAmount = computed(() => store.getters.totalAmount )
        const totalPrice = computed(() => store.getters.totalPrice )
        const items = computed(() => store.state.shoppingCart)
        const uid = auth.currentUser.uid

        const {error, order} = numOrder()

        const makeOrder = async()=>{
            await order(items.value, uid)
            if(!error.value){
                context.emit('order');
                clean()
            }
        }


        //curly brackets for things that will be executed. Parentheses for things to return
        const clean = () => {store.commit('cleanShoppingCard')}
        //we need return all things that we want use in the template
        return { totalAmount, totalPrice, clean, makeOrder, items }
    }
}
</script>
<style scoped>
img{
    width: 450px;
}
</style>