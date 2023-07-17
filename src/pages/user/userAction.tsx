import { doc, setDoc } from "firebase/firestore"
import { db } from "../../config/firebase-config"
import { AnyAction } from 'redux';
import { toast } from 'react-toastify';



interface UserData {
 
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  export const registerUserAction = async ({ data }: { data: UserData }): Promise<AnyAction> => {
    try {
      await setDoc(doc(db, "clients", "new-user-id"), data);
      toast.success('User registered successfully');
      return {
        type: 'REGISTER_USER_SUCCESS',
        payload: data,
        
      };
      
    } catch (error: any) {
      return {
        type: 'REGISTER_USER_FAILURE',
        payload: error.message,
      };
    }
  };