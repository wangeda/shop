import { firestore } from '../firebase/config'
import {ref} from 'vue'

const error = ref(null)

const message = async (email, message) => {
    error.value = null

    try {
        firestore.collection("messages").doc().set({
            email: email,
            message: message,
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    } catch(err) {
        console.log(err.message)
        error.value = err.message
    }
}
const sendMessage = () => {
    return { error, message }
}

export default sendMessage