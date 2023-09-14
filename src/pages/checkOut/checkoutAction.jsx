import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { setCartProd } from "../product/productSlice";
import { getUserOrderAction } from "../order/orderAction";

//add orders to db and assign ordernumber as pk.
export const addOrderedProductAction = (form) => async (dispatch) => {
  try {
    await setDoc(doc(db, "orders", form.orderNumber), form);
    dispatch(setCartProd([]));
    dispatch(getUserOrderAction());
  } catch (error) {}
};
