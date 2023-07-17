import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/user/userSlice"

export default configureStore({
    reducer:{
        user: userReducer,

        
    },
})