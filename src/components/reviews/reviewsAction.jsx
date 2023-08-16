import { FieldValue, addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { toast } from "react-toastify";
import { setReviewForm } from "../../system/cartSlice";
import { setReview } from "../../pages/product/productSlice";
import { getUserOrderAction } from "../../pages/order/orderAction";



//get all reviews from db and mount to redux
export const getReviewsAction = () => async (dispatch) => {
  try {
    const q = query(collection(db, "reviews"),
    
     );
    const reviewSnap = await getDocs(q);
    const reviewList = [];

    reviewSnap.forEach((doc) => {
      const reviewDt = {
        ...doc.data(),
        reviewId: doc.id,
      };

      reviewList.push(reviewDt);
    });

    dispatch(setReview(reviewList));
  } catch (error) {
    console.log(error.message);
    
    
  }
};



//add reviews data to db
export const addReviewAction = (form) => async(dispatch) => {
  const {firstName, lastName, uid, orderNumber, productId, ...rest} = form
    try {
        const docRef = await addDoc(collection(db, "reviews"), form)
        
        if(docRef?.id){
            toast.success("Your review has been added.")
            dispatch(setReviewForm(false))



 
            const q =  query(collection(db, "orders"), where("orderNumber", "==", form.orderNumber))
            const prodSnap = await getDocs(q);
            let reviewProd = {}
            prodSnap.forEach((doc) => {
              const catDt = {
                ...doc.data(),
              };
              reviewProd = {...catDt}
            });
            const productreview = reviewProd.product.find((item) => 
               item.id === form.productId)

               const productIndex = reviewProd.product.findIndex((item) => 
               item.id === form.productId)

            const updatedproductwithReview = {...productreview, reviewId:docRef.id  }

            reviewProd.product[productIndex] =  updatedproductwithReview

            setDoc(doc(db, "orders", reviewProd.orderNumber), reviewProd);
            
            dispatch(getUserOrderAction()) 
            dispatch(getReviewsAction())

          
            return;
        }
        toast.error("Unable add review at this time. Try back again later")
        
  
      
        
    } catch (error) {
        console.log(error);
        toast.error(error.message)
        
    }
  }

  



//delete reviews 

export const deleteReviewAction = (reviewOrderDetails) => async(dispatch) =>{

  try {

    await deleteDoc(doc(db, "reviews", reviewOrderDetails.reviewId ))
 

    const q =  query(collection(db, "orders"), where("orderNumber", "==", reviewOrderDetails.orderNumber))
    const prodSnap = await getDocs(q);
    let reviewProd = {}
    prodSnap.forEach((doc) => {
      const catDt = {
        ...doc.data(),
      };
      reviewProd = {...catDt}
    });
    const productreview = reviewProd.product.find((item) => 
       item.id === reviewOrderDetails.productId)

       const productIndex = reviewProd.product.findIndex((item) => 
       item.id === reviewOrderDetails.productId)

    const updatedproductwithoutReview = {...productreview, reviewId:null  }

    reviewProd.product[productIndex] =  updatedproductwithoutReview

    setDoc(doc(db, "orders", reviewProd.orderNumber), reviewProd);
    
    dispatch(getUserOrderAction()) 
    dispatch(getReviewsAction())

    toast.success("Review has been deleted.")


    
  } catch (error) {
    
  }



}