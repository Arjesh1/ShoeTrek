import {  doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { toast } from "react-toastify";
import { setCartProd } from "../product/productSlice";
import { setOrderModal } from "../../system/cartSlice";


//add orders to db and assign ordernumber as pk.
export const addOrderedProductAction = (form) => async(dispatch) => {
    try {
        
        await setDoc(doc(db, "orders", form.orderNumber ), form)
            dispatch(setCartProd([]))
            dispatch(setOrderModal(true))
    } catch (error) {
        toast.error("Unable to make a order at this time. Try back again later")
    }
  }