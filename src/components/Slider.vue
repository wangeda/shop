<template>
<div class="col-12">
    <div class="col-12 align-items-center justify-content-center d-flex">
        <div class="carousel slide w-75 h-50 " data-ride="carousel" >
            <div class="carousel-inner">
                <div class="carousel-item active" v-if="productos[0]" >
                    <img :src=productos[0].img alt="First slide" />
                    {{productos[0].name}}
                    {{productos[0].price}}€
                </div>
                <div v-else>Loading</div>
                <div class="carousel-item " v-if="productos[1]" >
                    <img :src=productos[1].img alt="First slide" />
                    {{productos[1].name}}
                    {{productos[1].price}}€
                </div>
               
                <div class="carousel-item " v-if="productos[2]" >
                    <img :src=productos[2].img alt="First slide" />
                    {{productos[2].name}}
                    {{productos[2].price}}€
                </div>

                <div class="carousel-item " v-if="productos[3]" >
                    <img :src=productos[3].img alt="First slide" />
                    {{productos[3].name}}
                    {{productos[3].price}}€
                </div>

                <div class="carousel-item " v-if="productos[4]" >
                    <img :src=productos[4].img alt="First slide" />
                    {{productos[4].name}}
                    {{productos[4].price}}€
                </div>
               
                <div class="carousel-item " v-if="productos[5]" >
                    <img :src=productos[5].img alt="First slide" />
                    {{productos[5].name}}
                    {{productos[5].price}}€
                </div>
               
                <div class="carousel-item " v-if="productos[6]" >
                    <img :src=productos[6].img alt="First slide" />
                    {{productos[6].name}}
                    {{productos[6].price}}€
                </div>
               
                <div class="carousel-item " v-if="productos[7]" >
                    <img :src=productos[7].img alt="First slide" />
                    {{productos[7].name}}
                    {{productos[7].price}}€
                </div>

                <div class="carousel-item " v-if="productos[8]" >
                    <img :src=productos[8].img alt="First slide" />
                    {{productos[8].name}}
                    {{productos[8].price}}€
                </div>
               
               <div class="carousel-item " v-if="productos[9]" >
                    <img :src=productos[9].img alt="First slide" />
                    {{productos[9].name}}
                    {{productos[9].price}}€
                </div>
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
</style>