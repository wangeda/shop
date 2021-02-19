<template>
<div class="col-12">
    <div class="col-12 justify-content-center d-flex">
        <div class="carousel slide " data-ride="carousel" >
            <div class="carousel-inner">
                <div class="carousel-item active justify-content-around" style="width:800px;" v-if="productos[0]" >
                    <h3>{{productos[0].name}}!</h3>
                    <div class="d-flex justify-content-around align-items-center">
                        <img :src=productos[0].img :alt=productos[0].name />
                        <div class="d-flex flex-column">
                            <h2>Then</h2>
                            <del><h5>{{productos[0].price}}€</h5></del>
                        </div>
                        <div class="d-flex flex-column">
                            <h2 class="promotion">Now</h2>
                            <h4 class="promotion">{{(productos[0].price*0.5).toFixed(2)}}€</h4>
                        </div>
                    </div>
                </div>
                <div class="carousel-item justify-content-around" style="width:800px;" v-if="productos[1]" >
                    <h3>{{productos[1].name}}</h3>
                    <div class="d-flex justify-content-around align-items-center">
                        <img :src=productos[1].img :alt=productos[1].name />
                        <div class="d-flex flex-column">
                            <h2>Then</h2>
                            <del><h5>{{productos[1].price}}€</h5></del>
                        </div>
                        <div class="d-flex flex-column">
                            <h2 class="promotion">Now</h2>
                            <h4 class="promotion">{{(productos[1].price*0.5).toFixed(2)}}€</h4>
                        </div>
                    </div>
                </div>

                <div class="carousel-item justify-content-around" style="width:800px;" v-if="productos[2]" >
                    <h3>{{productos[2].name}}</h3>
                    <div class="d-flex justify-content-around align-items-center">
                        <img :src=productos[2].img :alt=productos[2].name />
                        <div class="d-flex flex-column">
                            <h2>Then</h2>
                            <del><h5>{{productos[2].price}}€</h5></del>
                        </div>
                        <div class="d-flex flex-column">
                            <h2 class="promotion">Now</h2>
                            <h4 class="promotion">{{(productos[2].price*0.5).toFixed(2)}}€</h4>
                        </div>
                    </div>
                </div>

                <div class="carousel-item justify-content-around" style="width:800px;" v-if="productos[3]" >
                    <h3>{{productos[3].name}}</h3>
                    <div class="d-flex justify-content-around align-items-center">
                        <img :src=productos[3].img :alt=productos[3].name />
                        <div class="d-flex flex-column">
                            <h2>Then</h2>
                            <del><h5>{{productos[3].price}}€</h5></del>
                        </div>
                        <div class="d-flex flex-column">
                            <h2 class="promotion">Now</h2>
                            <h4 class="promotion">{{(productos[3].price*0.5).toFixed(2)}}€</h4>
                        </div>
                    </div>
                </div>

                <div class="carousel-item justify-content-around" style="width:800px;" v-if="productos[4]" >
                    <h3>{{productos[4].name}}</h3>
                    <div class="d-flex justify-content-around align-items-center">
                        <img :src=productos[4].img :alt=productos[4].name />
                        <div class="d-flex flex-column">
                            <h2>Then</h2>
                            <del><h5>{{productos[4].price}}€</h5></del>
                        </div>
                        <div class="d-flex flex-column">
                            <h2 class="promotion">Now</h2>
                            <h4 class="promotion">{{(productos[4].price*0.5).toFixed(2)}}€</h4>
                        </div>
                    </div>
                </div>

                
                <div class="carousel-item justify-content-around" style="width:800px;" v-if="productos[5]" >
                    <h3>{{productos[5].name}}</h3>
                    <div class="d-flex justify-content-around align-items-center">
                        <img :src=productos[5].img :alt=productos[5].name />
                        <div class="d-flex flex-column">
                            <h2>Then</h2>
                            <del><h5>{{productos[5].price}}€</h5></del>
                        </div>
                        <div class="d-flex flex-column">
                            <h2 class="promotion">Now</h2>
                            <h4 class="promotion">{{(productos[5].price*0.5).toFixed(2)}}€</h4>
                        </div>
                    </div>
                </div>

                <div class="carousel-item justify-content-around" style="width:800px;" v-if="productos[6]" >
                    <h3>{{productos[6].name}}</h3>
                    <div class="d-flex justify-content-around align-items-center">
                        <img :src=productos[6].img :alt=productos[6].name />
                        <div class="d-flex flex-column">
                            <h2>Then</h2>
                            <del><h5>{{productos[6].price}}€</h5></del>
                        </div>
                        <div class="d-flex flex-column">
                            <h2 class="promotion">Now</h2>
                            <h4 class="promotion">{{(productos[6].price*0.5).toFixed(2)}}€</h4>
                        </div>
                    </div>
                </div>

                <div class="carousel-item justify-content-around" style="width:800px;" v-if="productos[7]" >
                    <h3>{{productos[7].name}}</h3>
                    <div class="d-flex justify-content-around align-items-center">
                        <img :src=productos[7].img :alt=productos[7].name />
                        <div class="d-flex flex-column">
                            <h2>Then</h2>
                            <del><h5>{{productos[7].price}}€</h5></del>
                        </div>
                        <div class="d-flex flex-column">
                            <h2 class="promotion">Now</h2>
                            <h4 class="promotion">{{(productos[7].price*0.5).toFixed(2)}}€</h4>
                        </div>
                    </div>
                </div>


                <div class="carousel-item justify-content-around" style="width:800px;" v-if="productos[8]" >
                    <h3>{{productos[8].name}}</h3>
                    <div class="d-flex justify-content-around align-items-center">
                        <img :src=productos[8].img :alt=productos[8].name />
                        <div class="d-flex flex-column">
                            <h2>Then</h2>
                            <del><h5>{{productos[8].price}}€</h5></del>
                        </div>
                        <div class="d-flex flex-column">
                            <h2 class="promotion">Now</h2>
                            <h4 class="promotion">{{(productos[8].price*0.5).toFixed(2)}}€</h4>
                        </div>
                    </div>
                </div>

                <div class="carousel-item justify-content-around" style="width:800px;" v-if="productos[9]" >
                    <h3>{{productos[9].name}}</h3>
                    <div class="d-flex justify-content-around align-items-center">
                        <img :src=productos[9].img :alt=productos[9].name />
                        <div class="d-flex flex-column">
                            <h2>Then</h2>
                            <del><h5>{{productos[9].price}}€</h5></del>
                        </div>
                        <div class="d-flex flex-column">
                            <h2 class="promotion">Now</h2>
                            <h4 class="promotion">{{(productos[9].price*0.5).toFixed(2)}}€</h4>
                        </div>
                    </div>
                </div>
                <div v-else>Loading promotions</div>
            </div>
        </div>
    </div>
</div>

</template>
<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Card from './Card'

export default {
    name: "Slider",
    components: {Card},
    setup(){
        const store = useStore()
        onMounted(() => {
            store.dispatch('fetchData')
        })
        const productos = computed(() => store.state.productos)
        return { productos  }
    },
}
</script>
<style scoped>
img{
    max-width: 150px;
}

.promotion{
    color:red;
}
</style>