import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user:{},
    userOrders:[]
}

const userSlice = createSlice({
    name: "user",
    initialState, 
    reducers:{
        setUser: (state, {payload}) =>{
            state.user = payload 
        },
        setuserOrders: (state, {payload}) =>{
            state.userOrders = payload 
        }
    }
})

const {reducer, actions} = userSlice
export const {setUser, setuserOrders} = actions

export default reducer