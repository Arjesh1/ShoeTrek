import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { setCartProd } from "../product/productSlice";

//add orders to db and assign ordernumber as pk.
export const addOrderedProductAction = (form) => async (dispatch) => {
  try {
    await setDoc(doc(db, "orders", form.orderNumber), form);
    dispatch(setCartProd([]));
  } catch (error) {}
};
