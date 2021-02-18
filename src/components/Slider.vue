<template>
<div class="col-12">
    <div class="col-12 align-items-center justify-content-center d-flex">
        <div class="carousel slide w-75 h-50" data-ride="carousel" >
            <div class="carousel-inner">
                <div class="carousel-item active" >
                        {{productos[0]}}




                    <img class="d-block w-100" src="#" alt="First slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="#" alt="Second slide" />
                    <pre>
                        {{productos[1]}}
                    </pre>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="#" alt="Third slide" />
                    <pre>
                        {{productos[2]}}
                    </pre>
                </div>
            </div>
        </div>
    </div>
</div>
                       <pre></pre>
</template>
<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

export default {
    name: "Slider",
    props: [ 'product' ],
    setup(){
        const store = useStore()
        onMounted(() => {
            store.dispatch('fetchData')
        })
        const productos = computed(() => store.state.productos)

        

        return { productos }
    }

}
</script>