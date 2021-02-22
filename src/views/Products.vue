<template>

    <div>
        <h1>Special Spring Promotions</h1>
        <Slider/>

    </div>


<div class="row d-flex justify-content-center mt-3 offset-lg-1 col-lg-10 w-100" id="articlesCards">
    <div v-for="producto of productos" :key="producto.id">
        <Card v-if="producto.category == $route.params.slug" :producto="producto"/>
    </div>
</div>

<div>
    <Footer/>
</div>
</template>
<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Card from '../components/Card'
import Slider from './../components//Slider'
import Modal from '../components/Modal'
import Footer from '../components/Footer'

export default {
    name:"Products",
    components: { Card, Slider, Modal, Footer },
    props: [ 'producto' ],
    data(){
        return{
            showModal:false,
        }
    },
    methods:{
    toggleModal(){
        this.showModal = !this.showModal
      },

    showProduct(){
        {{this.producto.name}}
    },
    },
    setup(){
        const store = useStore()
        onMounted(() => {
            store.dispatch('fetchData')
        })
        const productos = computed(() => store.state.productos)
        return { productos }
    }
}
</script>
<style scoped>

</style>