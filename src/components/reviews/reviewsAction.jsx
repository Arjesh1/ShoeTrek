import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { toast } from "react-toastify";


//send message
export const addReviewAction = (form) => async(dispatch) => {
    try {
        const docRef = await addDoc(collection(db, "reviews"), form)
        
        if(docRef?.id){
            toast.success("Your message has been sent. We will contact you through email or phone number provided")
            
          
            return;
        }
        toast.error("Unable to send message at this time. Try back again later")
  
      
        
    } catch (error) {
        console.log(error);
        toast.error(error.message)
        
    }
  }