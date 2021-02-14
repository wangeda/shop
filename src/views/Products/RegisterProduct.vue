<template>
  <div v-if="error" class="alert alert-danger">{{ error }}</div>
  <form method="POST" @submit.prevent="handleSubmit">
    <div class="form-group row">
      <!--Nombre-->
      <div class="col-sm-12">
        <label for="name"><strong>Name</strong></label>
        <input
          type="text"
          v-model="productName"
          class="form-control"
          name="productName"
          id="name"
        />
        ç
      </div>
    </div>

    <div class="form-group row">
      <!--Precio-->
      <div class="col-sm-4">
        <label for="price"><strong>Price</strong></label>
        <input
          type="text"
          v-model="price"
          class="form-control"
          name="price"
          id="price"
        />
      </div>

      <!--stock-->
      <div class="col-sm-4">
        <label for="stock"><strong>Stock</strong></label>
        <input
          type="text"
          v-model="stock"
          class="form-control"
          name="stock"
          id="stock"
        />
      </div>
    </div>

    <div class="form-group row">
      <div class="col-sm-12">
        <label><strong>Description</strong></label>
        <textarea
          v-model="desc"
          style="resize: none"
          class="form-control"
          name="description"
          rows="10"
        ></textarea>
      </div>
    </div>

    <button
      class="btn mt-5 col-sm-6"
      style="color: #38d3b0; border-color: #38d3b0; font-weight: bold"
      onmouseout="this.style.backgroundColor='#FFF'; this.style.borderColor='#38d3b0'; this.style.color='#38d3b0'"
      onmouseover="this.style.backgroundColor='#38d3b0'; this.style.color='#FFF';"
      type="submit"
    >
      Register
    </button>
    {{ add2DB() }}
  </form>
</template>

<script>
import { ref } from "vue";
import { firestore } from "../../firebase/config";

export default {
  data() {
    return {
      productName: ref(""),
      price: ref(""),
      stock: ref(""),
      desc: ref(""),
    };
  },
  methods: {
    add2DB(){
      
      const firestore = this.firestorebd.collection('pets').doc('products')
      .set({
        productName: this.productName,
        price: this.price,
        stock: this.stock,
        desc: this.desc
      })

    }
  },

  setup(){
    const firestorebd = firestore
    return{firestorebd}
  }
}
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
  color: rgb(37, 190, 183);
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
  border-bottom: 1px solid rgb(37, 190, 183);
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 16px;
  position: relative;
  top: 2px;
}

input::placeholder {
  color: rgb(148, 165, 164);
}

input:focus {
  outline: none;
  border-bottom: 2px solid rgb(37, 190, 183);
}
</style>