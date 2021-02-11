<template>

<div v-if="user">
  <h1>Shopping Cart </h1>
  <ShoppingCart/>

</div>

<div v-else>
  <div v-if="showModal">
    <Modal @close="toggleModal" >
      <template v-slot:links>
        <router-link to="/login" class="button" >Sign In Now</router-link>
        <router-link to="/register" class="button" >Create an account</router-link>
      </template>
      <h1>You are not logged in!</h1>
      <p>You must log in to make purchases</p>

    </Modal>
  </div>

</div>


</template>

<script>
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'
import getUser from '../composables/user'
import Modal from '../components/Modal.vue';


export default {
  components: { ShoppingCart, Modal},

   data() {
        return {
            error: null,
            showModal:true,
        };
    },

    methods: {
        
        toggleModal(){
        this.showModal = !this.showModal
      },

    },

  setup(){
     const { user } = getUser()

     return { user}
  },
  
}
</script>

<style scoped>



</style>