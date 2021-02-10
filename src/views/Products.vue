<template>

<div class="container">



    <div class="row">
        <Card 
        v-for="producto of productos" :key="producto.id" 
        :producto='producto' />
    </div>
</div>

</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Card from '../components/Card'


export default {
    name:"Products",
    components: { Card },
    setup(){
        const store = useStore()
        onMounted(() => {
            store.dispatch('fetchData')
        })
        const productos = computed(() => store.state.productos)
        //const shoppingCart = computed(() => store.state.shoppingCart)

        return { productos }
    }
}
</script>

<style scoped>


</style>