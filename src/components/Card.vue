<template>
    <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 mb-3">
        <div class="card">
            <img :src='producto.thumbnailUrl' :alt="`img-${producto.title}`" class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">{{ producto.title }}</h5>
                <p class="card-text"><span>{{ producto.precio }} </span>€ </p>
                <button class="btn btn-primary" @click="add(producto)"   >Buy</button>
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


img{
    width: auto;
}



</style>