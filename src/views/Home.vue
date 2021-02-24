<template>
<div>

  <div class="row p-4 mb-5">
      <div class="col-8">
          <h1>Welcome to petVet</h1>
          <h5> Check our special promotions </h5>
          <h5>Create an account and start shopping with us.</h5>
      </div>
      <div class="col-2">
          <Slider/>
      </div>
  </div>
  <div class=" d-flex justify-content-around align-items-center mb-5">
      <router-link to="/products/pets">
          <div class="card d-flex align-items-center" style="width: 18rem">
              <img class="card-img-top mt-3" src="https://raw.githubusercontent.com/wangeda/pruebitas/master/src/assets/pets.jpg" alt="Pets" />
              <div class="card-body">
                  <h5 class="card-title">Pets</h5>
              </div>
          </div>
      </router-link>

      <router-link to="/products/crafts">
          <div class="card d-flex align-items-center" style="width: 18rem">
              <img class="card-img-top mt-3" src="https://raw.githubusercontent.com/wangeda/pruebitas/master/src/assets/crafts.jpg" alt="Crafts" />
              <div class="card-body">
                  <h5 class="card-title">Crafts</h5>
              </div>
          </div>
      </router-link>

      <router-link to="/products/garden">
          <div class="card d-flex align-items-center" style="width: 18rem">
              <img class="card-img-top mt-3" src="https://raw.githubusercontent.com/wangeda/pruebitas/master/src/assets/garden.png" alt="Garden" />
              <div class="card-body">
                  <h5 class="card-title">Garden</h5>
              </div>
          </div>
      </router-link>
  </div> 
</div>


<div class="col-12">
<Footer/>
</div>
</template>




<script>
import Slider from '../components/Slider'
import Footer from "../components/Footer"
export default {
  components: {Footer, Slider}
}
</script>

<style scoped>
.card img {
  width: 250px;
  height: 250px;
}

.card:hover{
  opacity: 0.6;
}
</style>