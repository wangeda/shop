<template>
  <div v-if="error" class="alert alert-danger">{{ error }}</div>
  <form @submit.prevent="handleSubmit" class="d-flex flex-column">

    <!-- rest of fields -->

    <div class="form-group row">
        <div class="col-6">
            <label><strong>Name</strong></label>
            <input type="text"  name="name" placeholder="Name..." v-model="name" required />
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
            <input type="text"  name="cp" placeholder="Postal Code..." v-model="cp" required />
        </div>
    </div>

    <div class="form-group row">
        <div class="col-6">
            <label><strong>Mobile phone</strong></label>
            <input type="text"  name="surname" placeholder="Mobile phone..." v-model="mobile" required />
        </div>

        <div class="col-6">
            <label><strong>Date of birth</strong></label>
            <input type="date"  name="date_of_birth" v-model="date_of_birth" required />
        </div>
    </div>

    <div class="form-group row">
        <div class="col-12">
            <label><strong>Email</strong></label>
            <input type="email" name="email" placeholder="Email..." v-model="email" required />
        </div>
    </div>


    <div class="form-group row">
        <div class="col-6">
            <label><strong>Password</strong></label>
            <input type="password" id="password" placeholder="Password..." required v-model="password" />
        </div>

        <div class="col-6">
            <label><strong>Repeat Password</strong></label>
            <input type="password" placeholder="Repeat password ... " required />
        </div>
    </div>

    <div class="terms">
        <label class="col-sm-12">
            <input type="checkbox" required v-model="terms">
            Accept <a href="">terms and conditions</a>
        </label>
    </div>

    <div class="d-flex justify-content-center">
     <button class="btn mt-5 col-sm-6" style=" color:#38d3b0; border-color:#38d3b0; font-weight:bold"
							onmouseout="this.style.backgroundColor='#FFF'; this.style.borderColor='#38d3b0'; this.style.color='#38d3b0'" 
							onmouseover="this.style.backgroundColor='#38d3b0'; this.style.color='#FFF';" type="submit">Register </button>
    </div>
  </form>




</template>

<script>
import { ref } from "vue";
import registerUser from "../composables/register";
import { useRouter } from 'vue-router'

export default {
  setup(props, context) {
    const { error, register } = registerUser();
    const router = useRouter()


    //redirect to home view
    const redirect = ()=>{
      router.push( {name: 'Home'})
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
        context.emit("register"); //context (seria el this)

        redirect()
      }
      
    };


    return {
      redirect,
      router,
      name,
      surname,
      address,
      mobile,
      date_of_birth,
      cp,
      email,
      password,
      handleSubmit,
      error
    };
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

input,
select {
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