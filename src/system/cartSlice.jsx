import { createSlice } from "@reduxjs/toolkit"


const initialState = {
   cartShow: false,
   search: false,
   forgetPassword: false,
   orderModal: false,
   orderDetailsModal: false,
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
          setOrderModal: (state, { payload }) => {
            state.orderModal = payload;
          },
          setOrderDetailsModal: (state, { payload }) => {
            state.orderDetailsModal = payload;
          },
          
    }
})

export const {setCartShow, setSearchShow, setForgetPassword, setOrderModal, setOrderDetailsModal} = systemSlice.actions

export default systemSlice.reducer