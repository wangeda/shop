<template>

<div class="card m-1" style="width: 20rem; max-heigth:450px; min-heigth:450px">
    <img :src=producto.img  alt="Card image cap" @click="toggleModal">
    <div class="card-body">
        <h5 class="card-title" @click="toggleModal" >{{producto.name}}</h5>
        <p class="card-text d-flex justify-content-between align-items-center font-weight-bold">{{producto.price}}€ 
            <button class="btn btn-primary" @click="add(producto)"><i class="fa fa-shopping-cart"></i> Buy</button>
        </p>
    </div>
</div>

<!-- TODO add img to the modal  -->
<div v-if="showModal">
  <Modal class="productModal" @close="toggleModal">
    <h2> {{producto.name}} </h2> 
    <p class="additionalInfo"> {{producto.desc}} </p>

  </Modal>
</div>

</template>
<script>
import { useStore } from 'vuex'
import Modal from './Modal'

export default {
    props: [ 'producto' ],
    components:{Modal},
    data(){
        return{
            showModal:false,
        }
    },

    methods:{
    toggleModal(){
        this.showModal = !this.showModal
      }
    },
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
.productModal{
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-content: center;
    top: 0;
    left: 0;
}
.modal-img{
    width:100px;
    position:absolute;
}
</style>