<template>
<div class="my-5">
    
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Item</th>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">Action</th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
            </tr>
        </thead>

        <tbody id="items">
            <Item v-for="item in items" :key="item.id" :item="item"/> 
        </tbody>
        
        <tfoot id="shoppingCart-Footer">
            <tr >
                <!-- shows if you have products in your shopping cart. -->
                <th scope="row" colspan="7" v-if="Object.keys(items).length === 0">Empty Shopping Cart - Start Shopping!</th>
                <!-- show if you don't have products -->
                
                <th v-else scope="row" colspan="7"  ><ShoppingCartFooter/></th>
            </tr>
        </tfoot>
    </table>
</div>
</template>
<script>
import { computed } from 'vue'
import {useStore} from 'vuex'
import Item from '../Item'
import ShoppingCartFooter from './ShoppingCartFooter'

export default {
    components: { Item , ShoppingCartFooter},
    setup(){
        const store = useStore()
        const items = computed(() => store.state.shoppingCart)
        return { items }
    }
}
</script>
<style scoped>
#shoppingCart-Footer{
    font-size: 25px;
    font-weight: bold;
}

</style>