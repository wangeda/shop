import { ref } from 'vue'
import { firestore } from '../firebase/config'

const error = ref(null)

const order = async (items, uid) => {
    error.value = null

    try {
        firestore.collection("orders").doc().set({
            user: uid,
            order: items
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
const numOrder = () => {
    return { error, order }
}

export default numOrder