import firebase from 'firebase/app'
import 'firebase/database'





const config = {
    apiKey: "AIzaSyD3xz1-BiZ3ikijuT7s6DgW6AfxP0oTEZU",
    authDomain: "pcg-shop.firebaseapp.com",
    databaseURL: "https://pcg-shop-default-rtdb.firebaseio.com/",
    storageBucket: "pcg-shop.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
const database = firebase.database();


export {
    database
}
