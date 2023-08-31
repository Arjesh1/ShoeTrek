import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/user/userSlice";
import productReducer from "./pages/product/productSlice";
import systemReducer from "./system/cartSlice";
import { persistStore, persistReducer, Persistor } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root", //key for the persisted state in storage
  storage, //storage engine to use (localStorage by default)
};

const persistedProductReducer = persistReducer(persistConfig, productReducer);
const persistedUserReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    product: persistedProductReducer,
    system: systemReducer,
  },
});

const persistor: Persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };
export type AppDispatch = typeof store.dispatch;
