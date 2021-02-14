import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//firebase sdk 
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

//create auth and firestore consts with firebase methods 
const auth = firebase.auth()
const firestore = firebase.firestore()

//TODO fix this ( create a for function )
//create 'products' doc and set in all data (repeat the process) 
const product1 = firestore.collection('products').doc('product1')
product1.set({
    id: 1,
    title: "Dog Collar",
    desc: "Leather dog collar",
    precio: 5.60,
    thumbnailUrl: "https://picsum.photos/id/0/600"
})

const product2 = firestore.collection('products').doc('product2')
product2.set({
    id: 2,
    title: "Dog leash",
    desc: "Comfortable strap with a range of 5 meters, with a comfortable design for the walk.",
    precio: 17.59,
    thumbnailUrl: "https://www.kiwoko.com/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwe73b3d79/images/accesorios_perros_flexi_correa_extensible_new_comfort_cinta_azul_S_5m_FCF10T5251BL_M.jpg"
})

const product3 = firestore.collection('products').doc('product3')
product3.set({
    id: 3,
    title: "NYLON Dog leash",
    desc: "Comfortable strap with a range of 5 meters, with a comfortable design for the walk.",
    precio: 22.95,
    thumbnailUrl: "https://www.kiwoko.com/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwb50bac93/images/accesorios_perros_ferplast_correa_nylon_sport_FER75376999_M_2.jpg"
})

const product4 = firestore.collection('products').doc('product4')
product4.set({
    id: 4,
    title: "Dog Collar",
    desc: "Collar for dogs, with a colorful and comfortable design so as not to harm your pet during the walk.",
    precio: 11.99,
    thumbnailUrl: "https://www.kiwoko.com/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwcd3add1c/images/accesorios_perros_arppe_collar_fucsia_beach_ARP72418_M.jpg"
})

const product5 = firestore.collection('products').doc('product5')
product5.set({
    id: 5,
    title: "Spotlit led Carabiner Light",
    desc: "Led collar for dogs, designed with a carabiner so that it can be hung from the collar.",
    precio: 6.99,
    thumbnailUrl: "https://www.kiwoko.com/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw88106dd5/images/accesorios_perros_nite_ize_mosqueton_lkuz_NITSLG-06-02_M.jpg"
})

const product6 = firestore.collection('products').doc('product6')
product6.set({
    id: 6,
    title: "Harness for large dogs black",
    desc: "The solid colored Kiwoko leash is perfect for walking your dog. It is adaptable from sizes M-L",
    precio: 11.19,
    thumbnailUrl: "https://www.kiwoko.com/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwe4c5fef9/images/accesorios_perros_kiwoko_arnes_perros_grandes_KWK14073_M.jpg"
})

const product7 = firestore.collection('products').doc('product7')
product7.set({
    id: 7,
    title: "Clean 8 rolls hygienic bags",
    desc: "Hygienic bags for dogs, to separate our pet's waste during walks.",
    precio: 5.95,
    thumbnailUrl: "https://www.kiwoko.com/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwf6711809/images/accesoriors_perros_nova_clean_pack_8_bolsas_negro_01_NCL70336_M.jpg"
})

const product8 = firestore.collection('products').doc('product8')
product8.set({
    id: 8,
    title: "Cat Luxyry Bed",
    desc: "Comfortable cat bed for your cat to rest.",
    precio: 39.95,
    thumbnailUrl: "https://www.kiwoko.com/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw7b779cbe/images/accesorios_gatos_catshion_cuna_luxury_CSH70750_M.jpg"
})

const product9 = firestore.collection('products').doc('product9')
product9.set({
    id: 9,
    title: "CAT Scratch Bed Bahamas Tube",
    desc: "Perfect for sleeping, perfect for hiding. Don't deprive your cat of her two favorite pleasures!",
    precio: 39.95,
    thumbnailUrl: "https://www.kiwoko.com/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwd26bf5b8/images/accesorios_gatos_catshion_cama_bahamas_tube_CSH88620_M.jpg"
})

const product10 = firestore.collection('products').doc('product10')
product10.set({
    id: 10,
    title: "Orthopedic Matrtress",
    desc: "Orthopedic mattress for dogs perfect to relieve pressure and relax the muscles of the pet.",
    precio: 23.50,
    thumbnailUrl: "https://www.kiwoko.com/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwb8a2e7bd/images/accesorios_perros_cosy_home_colchon_ortopedico_black_napper_COH70307_M.jpg"
})

//export all const and variables created
export {
    auth,
    firestore,
    product1, product2, product3, product4, product5, product6, product7, product8, product9, product10
}