<template>
<!-- TODO usar un v-for para mostrar los datos desde firebase en cada uno de los div  -->
<div class="col-12">
    <div class="col-12 align-items-center justify-content-center d-flex">
        <div class="carousel slide w-75 h-50" data-ride="carousel" >
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="#" alt="First slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="#" alt="Second slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="#" alt="Third slide" />
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: "Slider",
}
</script>