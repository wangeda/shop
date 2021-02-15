import { _ } from 'core-js'                             //import js   
import { ref } from 'vue'                               
import { auth } from '../firebase/config'

const user = ref(auth.currentUser)                      //current user

//comprobar en la api el usuario
auth.onAuthStateChanged(_user => {                      
    user.value = _user                                  //the value of the object user == to the current user
})

//usar la respuesta de la api
const getUser = () => {                                 //returns the value of the user object                    
    return { user }                                     
}

export default getUser                                  //export for use throughout the app