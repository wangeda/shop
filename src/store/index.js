import { firestore } from '../firebase/config'
import { createStore } from 'vuex'  

export default createStore ({
    state: {
        productos: [],
        shoppingCart: {}
    },

    //the only thing that can modify the state are the mutations. (Vuex rule)!!
    mutations:{
        setProducto(state, payload){
            state.productos = payload
          //  console.log(state.productos)
        },

        setShoppingCart(state, payload){
            state.shoppingCart[payload.id] = payload 
        },
        
        //as it has no actions it can be called directly in the view
        cleanShoppingCard(state){
            state.shoppingCart = {}     //empty object
        },

        //payload takes the value that we want. In this case it will be the Id
        increaseItem(state, payload){
            state.shoppingCart[payload].cantidad = state.shoppingCart[payload].cantidad + 1 
        },

        decreaseItem(state, payload){
            state.shoppingCart[payload].cantidad = state.shoppingCart[payload].cantidad - 1
            if(state.shoppingCart[payload].cantidad === 0){
                delete state.shoppingCart[payload]          //if it reaches 0 we remove the product
            }
        }
    },
    actions: {  
        async fetchData ({ commit }){
            try {
                const firestoredb = firestore
                const res = await firestoredb.collection('products').get()
                const data = res.docs.map(doc=>{
                    return { ...doc.data(), id : doc.id}
                })
                commit('setProducto', data)
            } catch (error){
                console.log(error)
            }
        },
        addShoppingCart({ commit, state }, producto){
            state.shoppingCart.hasOwnProperty(producto.id) 
            ? producto.cantidad = state.shoppingCart[ producto.id ].cantidad + 1
            : producto.cantidad = 1
            commit('setShoppingCart', producto)
        }
    },

    getters:{ 
        totalAmount(state){
            return Object.values(state.shoppingCart).reduce((acc, { cantidad }) => acc + cantidad, 0 ) 
        },

        totalPrice(state){
            return Object.values(state.shoppingCart).reduce((acc, { cantidad, price }) => acc + cantidad * price, 0 ).toFixed(2)
        }
    },
    
    modules: {
    }
})