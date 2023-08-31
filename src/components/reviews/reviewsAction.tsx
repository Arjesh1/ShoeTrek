import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { toast } from "react-toastify";
import { setReviewForm } from "../../system/cartSlice";
import { setReview } from "../../pages/product/productSlice";
import { getUserOrderAction } from "../../pages/order/orderAction";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../store";
import { ReviewType } from "../interfaces/interface";
import { AnyAction } from "redux";

//get all reviews from db and mount to redux
export const getReviewsAction: any =
  () =>
  async (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction>
  ): Promise<void> => {
    try {
      const q = query(collection(db, "reviews"));
      const reviewSnap = await getDocs(q);
      const reviewList: ReviewType[] = [];

      reviewSnap.forEach((doc) => {
        const reviewDt: ReviewType = {
          ...doc.data(),
          reviewId: doc.id,
        };

        reviewList.push(reviewDt);
      });

      dispatch(setReview(reviewList));
    } catch (error: any) {
      console.log(error.message);
    }
  };

//add reviews data to db
export const addReviewAction: any =
  (form: ReviewType) =>
  async (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction>
  ): Promise<void> => {
    console.log(form);
    try {
      const docRef = await addDoc(collection(db, "reviews"), form);

      if (docRef?.id) {
        toast.success("Your review has been added.");
        dispatch(setReviewForm(false));

        const q = query(
          collection(db, "orders"),
          where("orderNumber", "==", form.orderNumber)
        );
        const prodSnap = await getDocs(q);
        let reviewProd: any = {};
        prodSnap.forEach((doc) => {
          const catDt = {
            ...doc.data(),
          };
          reviewProd = { ...catDt };
        });
        const productreview: any = reviewProd.product.find(
          (item: any) => item.id === form.productId
        );

        const productIndex = reviewProd.product.findIndex(
          (item: any) => item.id === form.productId
        );

        const updatedproductwithReview = {
          ...productreview,
          reviewId: docRef.id,
        };

        reviewProd.product[productIndex] = updatedproductwithReview;

        setDoc(doc(db, "orders", reviewProd.orderNumber), reviewProd);

        dispatch(getUserOrderAction());
        dispatch(getReviewsAction());

        return;
      }
      toast.error("Unable add review at this time. Try back again later");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

//delete reviews

export const deleteReviewAction =
  (reviewOrderDetails: any) => async (dispatch: any) => {
    try {
      await deleteDoc(doc(db, "reviews", reviewOrderDetails.reviewId));

      const q = query(
        collection(db, "orders"),
        where("orderNumber", "==", reviewOrderDetails.orderNumber)
      );
      const prodSnap = await getDocs(q);
      let reviewProd: any = {};
      prodSnap.forEach((doc) => {
        const catDt = {
          ...doc.data(),
        };
        reviewProd = { ...catDt };
      });
      const productreview = reviewProd.product.find(
        (item: any) => item.id === reviewOrderDetails.productId
      );

      const productIndex = reviewProd.product.findIndex(
        (item: any) => item.id === reviewOrderDetails.productId
      );

      const updatedproductwithoutReview = { ...productreview, reviewId: null };

      reviewProd.product[productIndex] = updatedproductwithoutReview;

      setDoc(doc(db, "orders", reviewProd.orderNumber), reviewProd);

      dispatch(getUserOrderAction());
      dispatch(getReviewsAction());

      toast.success("Review has been deleted.");
    } catch (error) {}
  };
