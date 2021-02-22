<template>
<form @submit.prevent="submit">
    <label><strong>Email</strong></label>
    <input type="email" id="email" placeholder="Enter your e-mail" required v-model="email" />

    <label><strong>Password</strong></label>
    <input type="password" id="password" placeholder="Enter your password" required v-model="password" />

    <div class="form-group row buttons">
        <div class="col-6">
            <button class="btn mt-5 col-sm-6" style=" color:#38d3b0; border-color:#38d3b0; font-weight:bold"
							onmouseout="this.style.backgroundColor='#FFF'; this.style.borderColor='#38d3b0'; this.style.color='#38d3b0'" 
							onmouseover="this.style.backgroundColor='#38d3b0'; this.style.color='#FFF';" @click="resetPasswordEmail">Reset Password</button>
        </div>
        <div class="col-6">
            <button class="btn mt-5 col-sm-6" style=" color:#38d3b0; border-color:#38d3b0; font-weight:bold"
							onmouseout="this.style.backgroundColor='#FFF'; this.style.borderColor='#38d3b0'; this.style.color='#38d3b0'" 
							onmouseover="this.style.backgroundColor='#38d3b0'; this.style.color='#FFF';" type="submit">Log In
            </button>
        </div>
    </div>
</form>
<!-- TODO mostrar con mensaje de no existe email -->
<div v-if="showModal">
  <Modal @close="toggleLoginModal" >
    <h2>Whoops! We couldn't find your account</h2>
    <p class="additionalInfo">Are you sure you have entered the data correctly? </p>
  </Modal>
</div>
</template>
<script>
import { auth } from "../firebase/config";
import sendPasswordResetEmail from '../composables/resetPassword'
import Modal from '../components/Modal.vue';

export default {
    name: "Login",
    components: { Modal },
    data() {
        return {
            error: null,
            showModal:false,
        };
    },
    methods: {
        submit() {
            auth
                .signInWithEmailAndPassword( email.value, password.value)
                .then(() => {
                    console.log('loged');                                   //show 'loged' msj 
                    this.$router.replace({ name: "Home" });                 //redirect to Home view
                })          
                .catch((err) => {                                           //catch the error
                    this.error = err.message;                               //save the error msj on the variable (this.error)
                    this.showModal = true
                });
        },
        toggleLoginModal(){
        this.showModal = !this.showModal
      },
    },
    setup(){
        const { error, resetPassword } = sendPasswordResetEmail();
        const resetPasswordEmail = async () => {
          await resetPassword(email.value)
          if(!error.value){
            context.emit('resetPassword')
          }
          if (email.value === null){
          }else{
            // TODO traer el showModal e igualarlo a true
            console.log('Email doesn\'t exist')
          }
        };
        return { resetPasswordEmail }
    }
};
</script>
<style scoped>
form {
  min-width: 300px;
  max-width: 800px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: rgb(37, 190, 183);;
  display: inline-block;
  margin: 25px 0 15px;
}
input, select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid rgb(37, 190, 183);;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 16px;
  position: relative;
  top: 2px;
}
input::placeholder{
  color: rgb(148, 165, 164);
}
input:focus {
  outline: none;
  border-bottom: 2px solid rgb(37, 190, 183);;
}
</style>