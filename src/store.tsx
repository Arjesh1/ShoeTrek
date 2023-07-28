import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/user/userSlice"
import productReducer from "./pages/product/productSlice"
import systemReducer from "./system/cartSlice"

const store = configureStore({
    reducer:{
        user: userReducer,
        product: productReducer,
        system: systemReducer,

        
    },
})

export type RootState = ReturnType<typeof store.getState>;

export default store
export type AppDispatch = typeof store.dispatch