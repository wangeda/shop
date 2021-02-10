import { auth } from '../firebase/config'
import getUser from './user'
import { ref } from 'vue'


const error = ref(null)


const resetPassword = async (emailAddress) => {
    error.value = null

    try{
        const res = await auth.sendPasswordResetEmail(emailAddress)
        if ( !res ){
            throw new Error('Could\'t send the email')
        }
        return res
    } catch(err) {
        console.log(err.message)
        error.value = err.message
    }
}


const sendPasswordResetEmail = () => {
    return {  error, resetPassword }
}

export default sendPasswordResetEmail