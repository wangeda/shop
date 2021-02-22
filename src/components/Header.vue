<template>
<nav class="row">
    <!--Logo-->
    <div class="col-sm-2 ">
        <router-link to="/Home"><img src="@/assets/logoPV.png" alt=""></router-link>
    </div>
    <!-- First part of menu -->
    <div class="col-sm-3 d-flex align-items-center">
        <div class="dropdown col-4 item-nav">
            <div class=" dropdown-toggle " type="button" id="productMenu" data-toggle="dropdown" >
                Products
            </div>
            <div class="dropdown-menu" aria-labelledby="productMenu">
                <router-link to="/products/pets" class="dropdown-item">Pets</router-link>
                <router-link to="/products/crafts" class="dropdown-item">Crafts</router-link>
                <router-link to="/products/garden" class="dropdown-item">Garden</router-link>
            </div>
        </div>
        <router-link to="/about" class="col-4 p-3 item-nav">About Us</router-link>
        <router-link to="/contact" class="col-4 p-3 item-nav">Contact</router-link>
    </div>

    <div class="col-sm-3"></div>
    <!-- Second part of menu -->
    <div class="col-sm-4 d-flex align-items-center justify-content-around">
        <router-link to="/shoppingCard" class="col-6 item-nav"><div><i class="fa fa-shopping-bag"></i></div></router-link>
        <div class="col-5 ">
            <!-- if doesn´t exist user -->
            <div v-if="!user">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="item-nav p-3 col-6">
                        <router-link to="/login"><div>Sign In</div></router-link>
                    </div>
                    <div class="item-nav p-3 col-8 ">
                        <router-link to="/register"><div>Register <i class="fa fa-user-plus"></i> </div></router-link>
                    </div>
                </div>
            </div>
            <!-- show the email of the user -->
            <div v-else>
                <div class="d-flex justify-content-start ">
                    <div class=" item-nav p-3 dropdown-toggle d-flex align-items-center" 
                        id="UserMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> {{user.email}}  
                    </div> 
                    <div class="dropdown-menu" aria-labelledby="UserMenu">
                        <router-link to="/accountSettings" class="dropdown-item d-block"><i class="fa fa-cog"></i> Ajustes de la cuenta </router-link>
                        <a class="dropdown-item d-block" href="#"><i class="fa fa-question-circle"></i> Ayuda</a>
                        <a href="#" class="dropdown-item d-block" @click.prevent="handleClick"><i class="fa fa-sign-out"></i> Logout</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
</template>
<script>
import getUser from '../composables/user'
import logoutUser from '../composables/logout' 
import {useRouter} from 'vue-router'

export default {
    name:"Header",
    setup(){                                            //composition Api 
        const { logout, error } = logoutUser()          //get data from 'logout.js'           
        const { user } = getUser()                      //get data from 'user.js'
        const router = useRouter()                      //bring functions of the obj router (default is router-link, if you want more, you have to import)
        const handleClick = async () => {               //create logout function
            await logout()                              //wait to  firebase answer
            if(!error.value) {                          //if NO error
                console.log('Logout')                   //show in console
                router.push({ name: 'Home' })           //redirect to Home
            }
        }
        return { handleClick, user }
    },
};
</script>
<style scoped>
nav{
    border-bottom: 1px solid  rgb(215, 223, 222);;
}
.item-nav{
    padding: 3%;
}
.item-nav:hover{
    background: rgb(92, 212, 192, .2);
    border-radius:.5em;
}
.dropdown-item:hover{
    background: rgb(92, 212, 192, .2);
    border-radius:3px;
} 
</style>