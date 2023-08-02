import { createSlice } from "@reduxjs/toolkit";

const initialState ={
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
      
    }
})

const {reducer, actions} = productSlice
export const {setProdu, setCartProd} = actions

export default reducer