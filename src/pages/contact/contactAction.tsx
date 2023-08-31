import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { toast } from "react-toastify";
import { ContactType } from "../../components/interfaces/interface";

//send message
export const addMessageAction: any =
  (form: ContactType) => async (dispatch: any) => {
    try {
      const docRef = await addDoc(collection(db, "messages"), form);

      if (docRef?.id) {
        toast.success(
          "Your message has been sent. We will contact you through email or phone number provided"
        );

        return;
      }
      toast.error("Unable to send message at this time. Try back again later");
    } catch (error) {
      console.log(error);
    }
  };
