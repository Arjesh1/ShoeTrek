import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { setProdu } from "./productSlice";
import { RootState } from "../../store";
import { ProductType } from "../../components/interfaces/interface";

export const getProductsAction: any =
  () =>
  async (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction>
  ): Promise<void> => {
    try {
      const q = query(
        collection(db, "product")
        // can be uncommented when completed -- only calls active products
        //  where("status", "==", "active")
      );
      const prodSnap = await getDocs(q);
      const prodList: ProductType[] = [];

      prodSnap.forEach((doc) => {
        const catDt: ProductType = {
          ...doc.data(),
          slug: doc.id,
        };

        prodList.push(catDt);
      });

      dispatch(setProdu(prodList));
    } catch (error: any) {
      console.log(error.message);
    }
  };
