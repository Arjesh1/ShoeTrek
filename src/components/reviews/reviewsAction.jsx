import { FieldValue, addDoc, collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { toast } from "react-toastify";
import { setReviewForm } from "../../system/cartSlice";
import { setReview } from "../../pages/product/productSlice";


//add reviews data to db
export const addReviewAction = (form) => async(dispatch) => {
  const {firstName, lastName, uid, orderNumber, productId, ...rest} = form
    try {
        const docRef = await addDoc(collection(db, "reviews"), form)
        
        if(docRef?.id){
            toast.success("Your review has been added.")
            dispatch(setReviewForm(false))



 
            const q =  query(collection(db, "orders"), where("orderNumber", "==", form.orderNumber))
            console.log(q);
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

            const updatedproductwithReview = {...productreview, ...rest, reviewId:docRef.id  }

            reviewProd.product[productIndex] =  updatedproductwithReview

            setDoc(doc(db, "orders", reviewProd.orderNumber), reviewProd);
            




            

            
           
           






// const prod =  query(collection(db, "orders"), where("uid", "==", form.uid))

// let a = {}
// const querySnapshot = await getDocs(prod)
// querySnapshot.forEach((doc) => {
//  const order = doc.data()

//  a = order.product.filter((prod) => prod.id === form.productId)
// })

//  await db.collection('orders').doc(form.orderNumber).update({
//   product: FieldValue.arrayUnion({...a, form})
// })

          
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
        reviewId: doc.id,
      };

      reviewList.push(reviewDt);
    });

    dispatch(setReview(reviewList));
  } catch (error) {
    console.log(error.message);
    
    
  }
};