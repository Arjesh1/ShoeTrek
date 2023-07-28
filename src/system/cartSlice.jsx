import { createSlice } from "@reduxjs/toolkit"


const initialState = {
   cartShow: false,
}

const systemSlice = createSlice({
    name: "system",
    initialState,
    reducers: {
        setCartShow: (state, { payload }) => {
            state.cartShow = payload;
          },
    }
})

export const {setCartShow} = systemSlice.actions

export default systemSlice.reducer