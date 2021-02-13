import { ref } from 'vue'
import { auth, firestore } from '../firebase/config'
 

const error = ref(null)                                     
const firestoredb = firestore

//respuesta api firebase (modelo) --> bbdd
const register = async (email, password, name, address, surname, mobile, date_of_birth, cp) => {                   //declara funcion del registro
    error.value = null                                          //el atributo valor del obj error esta vacio (se crea)

    try {                                                       //intenta
        const res = await auth.createUserWithEmailAndPassword(email, password)      //res -> respuesta.     espera la respuesta de firebase cuando intentas crear cuenta con esos campos (email, password)
        .then(registeredUser=>{
            firestoredb.collection('users')
            .add({
                uid: registeredUser.user.uid,
                name: name,
                surname:surname,
                address: address,
                mobile: mobile,
                date_of_birth: date_of_birth,
                cp: cp
            })
        }).catch(function(error){
                    console.log(error)
                })
                error.value = null
                return res
        //    if (!res) {                                                 //si NO hay respuesta
    //        throw new Error('Couldn\'t complete the register')      //lanza un error (lanzamiento provocado) 'no se puede completat el registro'
                        
        // await res.user.updateProfile({name, address})
        // error.value = null

    } catch(err) {                                                  //captura el error
        console.log(err.message)                                    //muestra el error en la consola
        error.value = err.message                                   //lo guarda en el attr valor del obj error
    }
}


//(controlador) coge los datos y se los pasa a la vista
const registerUser = () => {                              
    return { error, register }
}

export default registerUser