import { createSlice } from "@reduxjs/toolkit";

// interface Cart {
//     img: string,
//     name: string,
//     price: string,
//     id:string,
//     size: any,
//     quantity: any
// }

const initialState: any ={
    product:[],
    cart:[],
    
}

const productSlice = createSlice({
    name: "produ",
    initialState, 
    reducers:{
        setProdu: (state, {payload}) =>{
            state.product = payload 
        },

        setCartProd: (state, {payload}) =>{
            state.cart = payload 
        },
        increateQty: (state, {payload}) =>{

             state.cart = state.cart.map((item:any)=>{
                if( item.id === payload){

                    return {...item, quantity: item.quantity + 1}
                }
                return item
            })
        },

        decreaseQty: (state, {payload}) =>{

            state.cart = state.cart.map((item:any)=>{
               if( item.id === payload){

                if(item.quantity !== 1){
                    return {...item, quantity: item.quantity - 1}
                } 
                    
                

                   
               }
               return item
           })
       }
      
    }
})

const {reducer, actions} = productSlice
export const {setProdu, setCartProd, increateQty, decreaseQty} = actions

export default reducer