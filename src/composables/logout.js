import { ref } from 'vue'
import { auth } from '../firebase/config'

const error = ref(null)                 //initialise const error (empty)

//solo para consumir api firebase
const logout = async () => {            //start const logout specifying that it is asynchronous -> async
    error.value = null                  //the value attribute of the object is empty 
    try{                                //try
        await auth.signOut()            //await -> espera desloguear de firebase
    } catch(err) {                      //catch errors
        console.log(err.message)        //show error message on console
        error.value = err.message       //we put the message in the value attribute of the error object
    }
}

//para usar la respuesta de la api en la app
const logoutUser= () => {                
    return { logout, error }             //returns response and error (if no error, returns null)
}

export default logoutUser                //export for use throughout the app