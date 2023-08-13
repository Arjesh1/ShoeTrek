import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { toast } from "react-toastify";
import { setReviewForm } from "../../system/cartSlice";
import { setReview } from "../../pages/product/productSlice";


//add reviews data to db
export const addReviewAction = (form) => async(dispatch) => {
    try {
        const docRef = await addDoc(collection(db, "reviews"), form)
        
        if(docRef?.id){
            toast.success("Your review has been added.")
            dispatch(setReviewForm(false))
          
            return;
        }
        toast.error("Unable add review at this time. Try back again later")
        
  
      
        
    } catch (error) {
        console.log(error);
        toast.error(error.message)
        
    }
  }

  
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
        slug: doc.id,
      };

      reviewList.push(reviewDt);
    });

    dispatch(setReview(reviewList));
  } catch (error) {
    console.log(error.message);
    
    
  }
};