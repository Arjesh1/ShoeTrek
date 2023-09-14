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
import {
  OrderProductType,
  OrderType,
  ReviewType,
} from "../interfaces/interface";
import { AnyAction } from "redux";

//get all reviews from db and mount to redux
export const getReviewsAction: Function =
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
    } catch (error: any) {}
  };

//add reviews data to db
export const addReviewAction: Function =
  (form: ReviewType) =>
  async (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction>
  ): Promise<void> => {
    try {
      // Add a review document to the "reviews" collection
      const docRef = await addDoc(collection(db, "reviews"), form);

      if (docRef?.id) {
        toast.success("Your review has been added.");
        dispatch(setReviewForm(false));

        // Query the "orders" collection to find the relevant order
        const q = query(
          collection(db, "orders"),
          where("orderNumber", "==", form.orderNumber)
        );
        const prodSnap = await getDocs(q);

        // Initialize reviewProd as an empty object
        let reviewProd: OrderType = {};

        prodSnap.forEach((doc) => {
          const catDt = {
            ...doc.data(),
          };
          reviewProd = { ...catDt };
        });

        // Find the product in the order that matches the review
        const productReview = reviewProd.product.find(
          (item: OrderProductType) => item.id === form.productId
        );

        if (productReview) {
          const productIndex = reviewProd.product.findIndex(
            (item: OrderProductType) => item.id === form.productId
          );

          // Update the product with the reviewId
          const updatedProductWithReview = {
            ...productReview,
            reviewId: docRef.id,
          };

          reviewProd.product[productIndex] = updatedProductWithReview;

          // Set the updated order document in Firestore
          await setDoc(doc(db, "orders", reviewProd.orderNumber), reviewProd);

          // Dispatch your actions to update the state
          dispatch(getUserOrderAction());
          dispatch(getReviewsAction());

          return;
        }
        toast.error("Product not found in the order.");
      } else {
        toast.error("Unable to add a review at this time. Try again later.");
      }
    } catch (error: any) {}
  };

//delete reviews

interface DeleteReviewType {
  productId?: string | undefined;
  orderNumber?: string | undefined;
  reviewId?: string | undefined | any;
}

export const deleteReviewAction: Function =
  (reviewOrderDetails: DeleteReviewType) =>
  async (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction>
  ): Promise<void> => {
    try {
      await deleteDoc(doc(db, "reviews", reviewOrderDetails.reviewId));

      const q = query(
        collection(db, "orders"),
        where("orderNumber", "==", reviewOrderDetails.orderNumber)
      );
      const prodSnap = await getDocs(q);
      let reviewProd: OrderType = {};
      prodSnap.forEach((doc) => {
        const catDt = {
          ...doc.data(),
        };
        reviewProd = { ...catDt };
      });
      const productreview = reviewProd.product.find(
        (item: OrderProductType) => item.id === reviewOrderDetails.productId
      );

      const productIndex = reviewProd.product.findIndex(
        (item: OrderProductType) => item.id === reviewOrderDetails.productId
      );

      const updatedproductwithoutReview = { ...productreview, reviewId: null };

      reviewProd.product[productIndex] = updatedproductwithoutReview;

      setDoc(doc(db, "orders", reviewProd.orderNumber), reviewProd);

      dispatch(getUserOrderAction());
      dispatch(getReviewsAction());

      toast.success("Review has been deleted.");
    } catch (error) {}
  };
