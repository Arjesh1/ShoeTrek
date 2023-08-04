import { createSlice } from "@reduxjs/toolkit"


const initialState = {
   cartShow: false,
   search: false
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
          
    }
})

export const {setCartShow, setSearchShow} = systemSlice.actions

export default systemSlice.reducer