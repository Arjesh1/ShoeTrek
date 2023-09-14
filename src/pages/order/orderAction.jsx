import { collection, getDocs, query, where } from "firebase/firestore";
import { setuserOrders } from "../user/userSlice";
import { db } from "../../config/firebase-config";

export const getUserOrderAction = (uid) => async (dispatch) => {
  try {
    const q = query(collection(db, "orders"), where("uid", "==", uid));
    const orderSnap = await getDocs(q);
    const orderList = [];

    orderSnap.forEach((doc) => {
      const orderDt = {
        ...doc.data(),
      };

      orderList.push(orderDt);
    });

    dispatch(setuserOrders(orderList));
  } catch (error) {}
};
