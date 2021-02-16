<template>
    <th scope="row" class="d-flex col-7 justify-content-end bg-light">
        <div class="col-3 " > Total Amount <span>{{totalAmount}}</span></div>
        <div class="col-3">
            <button class="btn btn-danger btn-sm" @click="clean"> Clean </button>
        </div>
        <div class="col-3">
            <button class="btn btn-success btn-sm"> Buy </button>
        </div>
        <div class="col-3 font-weight-bold"><span> {{ totalPrice }} € </span></div>
    </th>
    
</template>
<script>
import { computed } from 'vue'
import {useStore} from 'vuex'
export default {
    setup(){
        const store = useStore()
        const totalAmount = computed(() => store.getters.totalAmount )
        const totalPrice = computed(() => store.getters.totalPrice )

        //curly brackets for things that will be executed. Parentheses for things to return
        const clean = () => {store.commit('cleanShoppingCard')}
        //we need return all things that we want use in the template
        return { totalAmount, totalPrice, clean }
    }
}
</script>
<style scoped>
img{
    width: 450px;
}
</style>