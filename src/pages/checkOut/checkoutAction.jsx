import {  doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { toast } from "react-toastify";
import { setCartProd } from "../product/productSlice";


//send message
export const addOrderedProductAction = (form) => async(dispatch) => {
    try {
        
        await setDoc(doc(db, "orders", form.orderNumber ), form)
           
            toast.success("Your order has been successful")
            dispatch(setCartProd([]))

    } catch (error) {
        console.log(error);
        toast.error("Unable to make a order at this time. Try back again later")
        
    }
  }