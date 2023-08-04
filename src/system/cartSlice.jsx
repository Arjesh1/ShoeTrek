import { createSlice } from "@reduxjs/toolkit"


const initialState = {
   cartShow: false,
   search: false,
   forgetPassword: false,
}

const systemSlice = createSlice({
    name: "system",
    initialState,
    reducers: {
        setCartShow: (state, { payload }) => {
            state.cartShow = payload;
          },
          setSearchShow: (state, { payload }) => {
            state.search = payload;
          },
          setForgetPassword: (state, { payload }) => {
            state.forgetPassword = payload;
          },
          
    }
})

export const {setCartShow, setSearchShow, setForgetPassword} = systemSlice.actions

export default systemSlice.reducer