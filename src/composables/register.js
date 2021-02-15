import { ref } from 'vue'
import { auth, firestore } from '../firebase/config'

const error = ref(null)
const firestoredb = firestore

const register = async (email, password, name, address, surname, mobile, date_of_birth, cp) => {            //declares the function of the registry
    error.value = null                                                                                      //the value attribute of the obj error is empty (is created)
    try {                                                                                                   //try
        const res = await auth.createUserWithEmailAndPassword(email, password)                              //res -> answer.     wait for the response from firebase when you try to create an account with those fields (email, password)
            .then(registeredUser => {
                const userName = email
                console.log(userName)
                firestoredb.collection('users').doc(userName).set({
                    uid: registeredUser.user.uid,
                    name: name,
                    surname: surname,
                    address: address,
                    mobile: mobile,
                    date_of_birth: date_of_birth,
                    cp: cp
                })
            }).catch(function (error) {
                console.log(error)
            })
        error.value = null
        return res
    } catch (err) {                                                                                         //catch the error
        console.log(err.message)                                                                            //show the error on console
        error.value = err.message                                                                           //stores it in the attr value of the error object
    }
}

const registerUser = () => {
    return { error, register }
}

export default registerUser                                                                                 //export for use throughout the app