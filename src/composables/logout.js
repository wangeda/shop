import { ref } from 'vue'
import { auth } from '../firebase/config'

const error = ref(null)                 //inicializar const error (vacio)

//solo para consumir api firebase
const logout = async () => {            //inicia const logout espcificando que es asincrono -> async
    error.value = null                  //el atributo valor del objeto esta vacio 
    try{                                //intenta
        await auth.signOut()            //await -> espera desloguear de firebase
    } catch(err) {                      //capturar errores
        console.log(err.message)        //mostrar el mensaje de error en la consola
        error.value = err.message       //ponemos el mensaje en el atributo valor del objeto del error
    }
}


//para usar la respuesta de la api en la app
const logoutUser= () => {                
    return { logout, error }             //devuelve respuesta y error (si no hay error, lo devuelve a null)
}

export default logoutUser                      