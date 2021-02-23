<template>

<div class="mt-5 p-5 ml-5">
  <div class="row">
    <div class="col-4">
      <h2>About Us</h2>
      <p>Welcome to petVet, here you will find everything you need for your pet's needs, 
          the care of your garden and all the utilities for your crafts.</p>

      <div class="row mt-5">
        <div class="col-4">
          <p><strong>Contact phone</strong></p>
          <p><strong>Address</strong></p>
        </div>
        <div class="col-8">
          <p>### ## ## ##</p>
          <p> Conil Road - Masdache, 14, 35572 Masdache, Las Palmas</p>
        </div>
      </div>
    </div>
    <div class="col-8">
      <h2>Where we are</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.652446049568!2d-13.654608655315595!3d28.99766830000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4623f688372165%3A0xdf13bffcf1ba9b68!2sCanary%20Island%20Publications!5e0!3m2!1ses!2ses!4v1614001826861!5m2!1ses!2ses" width="600" height="450" style="border:0;" loading="lazy"></iframe>
    </div>
  </div>
</div>






</template>

<script>
import {firestore} from '../firebase/config'
export default {
  setup() {
    const firestore = firestore
    return { firestore }
    },
    data() {
      return {
        name: "",
      }
    },
    methods: {
      add2DB(name) {
        firestore.collection('names').add({
          name: 'Mae'
        })
      }
    }
}
</script>