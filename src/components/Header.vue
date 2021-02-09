<template>
<nav class="row">
				
    <!--Logo-->
    <div class="col-sm-2 mb-2">
        <router-link to="/Home"><img src="@/assets/logoPV.png" alt=""></router-link>
    </div>

    <!-- First part of menu -->
    <div class="col-sm-3 d-flex align-items-center">
        <router-link class="col-6 item-nav" to="/products"><div>Products</div></router-link>
        <div class="col-6 item-nav">About Us</div>
    </div>

    <div class="col-sm-3"></div>


    <!-- Second part of menu -->
    <div class="col-sm-4 d-flex align-items-center justify-content-around">

        <div class="col-3 item-nav" ><i class="fa fa-shopping-bag"></i></div>

        <div class="col-5 item-nav">
            <!-- if doesn´t exist user -->
            <div v-if="!user" >
                <div class="d-flex align-items-center justify-content-between">
                    <router-link class="col-6" to="/login"><div>Sign In</div></router-link>
                    <router-link class="col-8" to="/register"><div>Register <i class="fa fa-user-plus"></i> </div></router-link>
                </div>
            </div>

            <div v-else class="">
                <div class="d-flex justify-content-start">
                    <div class=" nav-item dropdown-toggle d-flex align-items-center" 
                    id="UserMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> {{ user.email}}
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
        const { logout, error } = logoutUser()          //coger datos del logout.js            
        const { user } = getUser()                      //coger datos del user.js
        const router = useRouter()                      //traer funciones del obj router (por defecto viene el router-link, si quieres más, hay que importar)
        const handleClick = async () => {               //crear funcion que desloguea
            await logout()                              //esperar respuesta de firebase
            if(!error.value) {                          //si NO hay error
                console.log('Logout')                   //muestra en la consola 
                router.push({ name: 'Home' })           //Redirige automáticamente a Home
            }
        }
        return { handleClick, user }
    }
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
   border-radius:3px;
}
.dropdown-item:hover{
   background: rgb(92, 212, 192, .2);
   border-radius:3px;
}

</style>