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
    name: "Dog Collar",
    desc: "Leather dog collar",
    price: 10.99,
    category: "pets",
    img: "https://www.kiwoko.com/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwd66e61e2/images/collar_led_perros_flamingo_visio_light_naranja_KAR64904_M.jpg"
})

const product2 = firestore.collection('products').doc('product2')
product2.set({
    name: "Dog leash",
    desc: "Comfortable strap with a range of 5 meters, with a comfortable design for the walk.",
    price: 17.59,
    category: "pets",
    img: "https://www.kiwoko.com/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwe73b3d79/images/accesorios_perros_flexi_correa_extensible_new_comfort_cinta_azul_S_5m_FCF10T5251BL_M.jpg"
})

const product3 = firestore.collection('products').doc('product3')
product3.set({
    name: "NYLON Dog leash",
    desc: "Comfortable strap with a range of 5 meters, with a comfortable design for the walk.",
    price: 22.95,
    category: "pets",
    img: "https://www.kiwoko.com/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwb50bac93/images/accesorios_perros_ferplast_correa_nylon_sport_FER75376999_M_2.jpg"
})

const product4 = firestore.collection('products').doc('product4')
product4.set({
    name: "Dog Collar",
    desc: "Collar for dogs, with a colorful and comfortable design so as not to harm your pet during the walk.",
    price: 11.99,
    category: "pets",
    img: "https://www.kiwoko.com/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwcd3add1c/images/accesorios_perros_arppe_collar_fucsia_beach_ARP72418_M.jpg"
})

const product5 = firestore.collection('products').doc('product5')
product5.set({
    name: "Spotlit led Carabiner Light",
    desc: "Led collar for dogs, designed with a carabiner so that it can be hung from the collar.",
    price: 6.99,
    category: "pets",
    img: "https://www.kiwoko.com/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw88106dd5/images/accesorios_perros_nite_ize_mosqueton_lkuz_NITSLG-06-02_M.jpg"
})

const product6 = firestore.collection('products').doc('product6')
product6.set({
    name: "Harness for large dogs",
    desc: "The solid colored Kiwoko leash is perfect for walking your dog. It is adaptable from sizes M-L",
    price: 11.19,
    category: "pets",
    img: "https://www.kiwoko.com/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwe4c5fef9/images/accesorios_perros_kiwoko_arnes_perros_grandes_KWK14073_M.jpg"
})

const product7 = firestore.collection('products').doc('product7')
product7.set({
    name: "Clean 8 rolls hygienic bags",
    desc: "Hygienic bags for dogs, to separate our pet's waste during walks.",
    price: 5.95,
    category: "pets",
    img: "https://www.kiwoko.com/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwf6711809/images/accesoriors_perros_nova_clean_pack_8_bolsas_negro_01_NCL70336_M.jpg"
})

const product8 = firestore.collection('products').doc('product8')
product8.set({
    name: "Cat Luxyry Bed",
    desc: "Comfortable cat bed for your cat to rest.",
    price: 39.95,
    category: "pets",
    img: "https://www.kiwoko.com/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw7b779cbe/images/accesorios_gatos_catshion_cuna_luxury_CSH70750_M.jpg"
})

const product9 = firestore.collection('products').doc('product9')
product9.set({
    name: "CAT Scratch Bed Tube",
    desc: "Perfect for sleeping, perfect for hiding. Don't deprive your cat of her two favorite pleasures!",
    price: 39.95,
    category: "pets",
    img: "https://www.kiwoko.com/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwd26bf5b8/images/accesorios_gatos_catshion_cama_bahamas_tube_CSH88620_M.jpg"
})

const product10 = firestore.collection('products').doc('product10')
product10.set({
    name: "Orthopedic Matrtress",
    desc: "Orthopedic mattress for dogs perfect to relieve pressure and relax the muscles of the pet.",
    price: 23.55,
    category: "pets",
    img: "https://www.kiwoko.com/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwb8a2e7bd/images/accesorios_perros_cosy_home_colchon_ortopedico_black_napper_COH70307_M.jpg"
})

const product11 = firestore.collection('products').doc('product11')
product11.set({
    name: "MULTI-SURFACE PAINT",
    desc: "Cadence Hybrid paint is a multi-surface paint with high adhesion and high coverage. Suitable for wood, cardboard, stone, porexpan, metal, glass, cement, terracotta, paper, porcelain, leather, fabric, polyurethane... without the need for prior priming.",
    price: 2.32,
    category: "crafts",
    img: "https://www.latiendadelasmanualidades.com/17635-large_default/pintura-multisuperficie-hybrid-de-cadence-ciruela.jpg"
})

const product12 = firestore.collection('products').doc('product12')
product12.set({
    name: "STENCIL STAMPERIA",
    desc: "Stencil of 0.5mm thickness from Stamperia, made of flexible and resistant material, ideal for textured and spray techniques.",
    price: 4.5,
    category: "crafts",
    img: "https://www.latiendadelasmanualidades.com/17827-large_default/stencil-stamperia-20x25cm-y-05mm-de-espesor-pendulo-y-alas.jpg"
})



const product13 = firestore.collection('products').doc('product13')
product13.set({
    name: "Set 2 Brushes",
    desc: "Set of hard bristle brushes ideal for applying patinas.Contains 2 brushes of different sizes.",
    price: 3.6,
    category: "crafts",
    img: "https://www.latiendadelasmanualidades.com/7036-large_default/set-2-pinceles-para-patinas.jpg"
})


const product14 = firestore.collection('products').doc('product14')
product14.set({
    name: "Watercolour SET",
    desc: "Artis Decor watercolour set. 1/2 godet. 24 colours",
    price: 23.90,
    category: "crafts",
    img: "https://www.latiendadelasmanualidades.com/14249-large_default/set-de-acuarela-artis-decor-journal24-colores-wad21.jpg"
})


const product15 = firestore.collection('products').doc('product15')
product15.set({
    name: "Painted Resin Squirrel",
    desc: "Squirrel figure.  Painted resin. Measurements: 43x19x38 cm.",
    price: 35.50,
    category: "garden",
    img: "https://www.tiendadeljardin.com/11501-thickbox_default/figura-ardilla-resina-pintada.jpg"
})

const product16 = firestore.collection('products').doc('product16')
product16.set({
    name: "Owl Scares away Birds",
    desc: "Owl rotating head bird repeller Ideal for gardens, roofs, vegetable gardens... Repels pigeons and starlings. Works with the wind. Measurements: 40x19 cm. Weight: 0,48 kg.",
    price: 11.60,
    category: "garden",
    img: "https://www.tiendadeljardin.com/11901-thickbox_default/buho-ahuyenta-aves-cabeza-giratoria-.jpg"
})


const product17 = firestore.collection('products').doc('product17')
product17.set({
    name: "Garden Gnome",
    desc: "Classic garden dwarf. Material: resin. Measurements: 31,5 cm. Unit, 4 assorted models (to choose from, depending on availability).",
    price: 12.90,
    category: "garden",
    img: "https://www.tiendadeljardin.com/11679-thickbox_default/enano-jardin-grimm-resina-315-cm-.jpg"
})


const product18 = firestore.collection('products').doc('product18')
product18.set({
    name: "Basket holder bucket",
    desc: "Basket holder bucket. Sheet metal with wooden handle. Measurements: 13x14x23 cm. Unit, assorted models.",
    price: 4.80,
    category: "garden",
    img: "https://www.tiendadeljardin.com/7589-thickbox_default/cubo-portatiestos-chapa-asa-madera-redondo-clover-.jpg"
})




//export all const and variables created
export {
    auth,
    firestore,
    product1, product2, product3, product4, product5, product6, product7, product8, product9, product10
}