<template>
    <th scope="row" colspan="2">Total Amount</th>
        <td>{{ totalAmount }}</td>
        <td>
            <button class="btn btn-danger btn-sm" id="vaciar-carrito" @click="clean">
                Clean
            </button>
        </td>
        <td class="font-weight-bold"><span> {{ totalPrice }} € </span></td>
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
