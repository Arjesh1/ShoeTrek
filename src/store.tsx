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


//prevent data loss from redux store  on reload

// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// import userReducer from "./pages/user/userSlice"
// import productReducer from "./pages/product/productSlice"
// import systemReducer from "./system/cartSlice"

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const rootReducer: any = {
//   user: userReducer,
//   product: productReducer,
//   system: systemReducer,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
// });

// const persistor = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export { store, persistor };