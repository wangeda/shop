<template>
<div class="col-12 col-sm-3 mb-4">
    <div class="card w-100 d-flex justify-content-center">
        <img :src='producto.img' :alt="`img-${producto.name}`" class="card-img-top"/>
        <div class="card-body">
            <p class="card-title"><strong>{{ producto.name }}</strong></p>
            <div class="row col-12 d-flex align-items-center justify-content-around">
                <p class="card-text btn col-sm-6"><span>{{ producto.price }} </span>€ </p>
                <button class="btn-primary btn col-sm-6" @click="add(producto)"><i class="fa fa-shopping-cart"></i></button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { useStore } from 'vuex'

export default {
    props: [ 'producto' ],
    setup(){
        const store = useStore()
        const add = producto => {
            store.dispatch('addShoppingCart', producto)
        }
        return { add }
    }
}
</script>
<style scoped>
</style>