<template>
<div v-if="error" class="alert alert-danger">{{ error }}</div>
<form @submit.prevent="handleSubmit" class="d-flex flex-column">
    <div class="form-group row">
        <div class="col-6">
            <label><strong>Name</strong></label>
            <input type="text"  name="name" placeholder="Name..." v-model="name" v-on:change="isNameValid" required />
            <p id="nameInfo"></p>
        </div>
        <div class="col-6">
            <label><strong>Surname</strong></label>
            <input type="text"  name="surname" placeholder="Surname..." v-model="surname" required />
        </div>
    </div>
    <div class="form-group row">
        <div class="col-8">
            <label><strong>Address</strong></label>
            <input type="text"  name="address" placeholder="Address..." v-model="address" required />
        </div>
        <div class="col-4">
            <label><strong>Postal Code</strong></label>
            <input type="text"  name="cp" placeholder="Postal Code..." v-model="cp" v-on:change="isCpValid" required />
            <p id="cpInfo"></p>
        </div>
    </div>
    <div class="form-group row">
        <div class="col-6">
            <label><strong>Mobile phone</strong></label>
            <input type="text"  name="mobile" placeholder="Mobile phone..." v-on:change="isMobileValid" v-model="mobile" required />
            <p id="mobileInfo"></p>
        </div>
        <div class="col-6">
            <label><strong>Date of birth</strong></label>
            <input type="date"  name="date_of_birth" v-model="date_of_birth" required />
        </div>
    </div>
    <div class="form-group row">
        <div class="col-12">
            <label><strong>Email</strong></label>
            <input type="email" name="email" placeholder="Email..." v-model="email"  v-on:change="isEmailValid"   required />
            <p id="emailInfo"></p>
        </div>
    </div>
    <div class="form-group row">
        <div class="col-6">
            <label><strong>Password</strong></label>
            <input type="password" id="password" placeholder="Password..." v-on:change="isPasswordValid" required v-model="password" />
            <p id="passwordInfo"></p>
        </div>
        <div class="col-6">
            <label><strong>Repeat Password</strong></label>
            <input type="password" placeholder="Repeat password ... " v-model="repeatPassword" v-on:change="isPasswordRepeat" required />
            <p id="repeatPasswordInfo"></p>
        </div>
    </div>
    <div class="terms">
        <label class="col-sm-12">
            <input type="checkbox" required> Accept <router-link to="/termsConditions">terms and conditions</router-link>
        </label>
    </div>
    <div class="d-flex justify-content-center">
        <button class="btn mt-5 col-sm-6" style=" color:#38d3b0; border-color:#38d3b0; font-weight:bold"
              onmouseout="this.style.backgroundColor='#FFF'; this.style.borderColor='#38d3b0'; this.style.color='#38d3b0'" 
              onmouseover="this.style.backgroundColor='#38d3b0'; this.style.color='#FFF';" type="submit">Register 
        </button>
    </div>
</form>

</template>
<script>
import { ref } from "vue";
import registerUser from "../composables/register";
import { useRouter } from 'vue-router'

export default {
  data(){
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexName = /^[A-Z]([a-z]{2,8})$|^[A-Z]([a-z]{2,8}) [A-Z]([a-z]{2,8})$/;
    const regexMobile = /^[679]\d{8}$/i;
    const regexCp = /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
    const regexPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{7,}$/;
    const repeatPassword = ref('')

    return {regexEmail, regexName, regexMobile, regexCp, regexPassword, repeatPassword}
  },
  methods:{
    isEmailValid() {
      if (this.regexEmail.test(this.email)) {
        const email = document.getElementById('emailInfo')
        email.textContent=''
      } else {
        const email = document.getElementById('emailInfo')
        email.textContent='Your email address is not valid'
      }
    },

    isNameValid() {
      if (this.regexName.test(this.name)) {
        const name = document.getElementById('nameInfo')
        name.textContent=''
      } else {
        const name = document.getElementById('nameInfo')
        name.textContent='It must be start with a Capital Letter'
      }
    },

    isMobileValid() {
      if (this.regexMobile.test(this.mobile)) {
        const mobile = document.getElementById('mobileInfo')
        mobile.textContent=''
      } else {
        const mobile = document.getElementById('mobileInfo')
        mobile.textContent="Your number must start with '6', '7' or '9'"
      }
    },
    
    isCpValid() {
      if (this.regexCp.test(this.cp)) {
        const cp = document.getElementById('cpInfo')
        cp.textContent=''
      } else {
        const cp = document.getElementById('cpInfo')
        cp.textContent="Please enter a valid postal code"
      }
    },

    isPasswordValid() {
      if (this.regexPassword.test(this.password)) {
        const password= document.getElementById('passwordInfo')
        password.textContent=''
      } else {
        const password= document.getElementById('passwordInfo')
        password.textContent='Your password must be at least 7 characters long including letters, numbers and a symbol'
      }
    },

    isPasswordRepeat(){
      if(this.password != this.regexPassword){
        const repeatPassword = document.getElementById('repeatPasswordInfo')
        repeatPassword.textContent='Password does\nt match'
      } 
      if(this.password == this.repeatPassword){
        const repeatPassword = document.getElementById('repeatPasswordInfo')
        repeatPassword.textContent=''      
      }
    },


  },
  setup(props, context) {
    const { error, register } = registerUser();
    const router = useRouter()
    const redirect = () => {
      router.push( {name: 'Home'})                          //redirect to home view
    }
    // refs
    const name = ref("");
    const surname = ref("");
    const mobile = ref("");
    const date_of_birth = ref("");
    const cp = ref("");
    const address = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await register(email.value, password.value, name.value, address.value, surname.value, mobile.value, date_of_birth.value, cp.value);
      if (!error.value) {
        context.emit("register");                           //context (seria el this)
        redirect()
      }
    };
    return { redirect, router, name, surname, address, mobile, date_of_birth, cp, email, password, handleSubmit, error  };
  },
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