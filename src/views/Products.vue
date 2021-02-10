<template>

<div class="container group-row">



    <Slider>

    </Slider>

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
import Slider from './../components//Slider'


export default {
    name:"Products",
    components: { Card, Slider },
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