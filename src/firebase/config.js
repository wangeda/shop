import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyD3xz1-BiZ3ikijuT7s6DgW6AfxP0oTEZU",
    authDomain: "pcg-shop.firebaseapp.com",
    projectId: "pcg-shop",
    storageBucket: "pcg-shop.appspot.com",
    messagingSenderId: "1003579985860",
    appId: "1:1003579985860:web:fdbe66e7e25351f5e19e91"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth()
const firestore = firebase.firestore()



export {
    auth,
    firestore
}
