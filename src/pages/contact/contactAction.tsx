import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { toast } from "react-toastify";
import { ContactType } from "../../components/interfaces/interface";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../store";
import { AnyAction } from "redux";

//send message
export const addMessageAction: Function =
  (form: ContactType) =>
  async (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction>
  ): Promise<void> => {
    try {
      const docRef = await addDoc(collection(db, "messages"), form);

      if (docRef?.id) {
        toast.success(
          "Your message has been sent. We will contact you through email or phone number provided"
        );

        return;
      }
      toast.error("Unable to send message at this time. Try back again later");
    } catch (error) {}
  };
