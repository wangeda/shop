import { _ } from 'core-js'                             //importar js   
import { ref } from 'vue'                               
import { auth } from '../firebase/config'

const user = ref(auth.currentUser)                      //usuario actual


//comprobar en la api el usuario
auth.onAuthStateChanged(_user => {                      //aviso cuando la autentificacion cambia
    user.value = _user                                  //el valor del obj usuario  == al usuario actual
})


//usar la respuesta de la api
const getUser = () => {                                 //devuelve el valor del obj usuario                    
    return { user }                                     
}




export default getUser                                  //exportar para poder usar en toda la app