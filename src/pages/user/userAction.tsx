import { doc, setDoc } from "firebase/firestore"
import { auth, db } from "../../config/firebase-config"
import { AnyAction } from 'redux';
import { toast } from 'react-toastify';
import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth";
import { log } from "console";




interface UserData {
  firstName: string  ;
  lastName: string ;
  email: string ;
  password?: string | undefined ;
  confirmPassword?: string ;
  uid?: string | undefined;
}



export const registerUserAction = async (userData: UserData): Promise<AnyAction | undefined> => {
  try {
    const { password, confirmPassword, ...rest } = userData;
    if (!password) {
      throw new Error("Password is required.");
    }
    const promiseUser: Promise<UserCredential> = createUserWithEmailAndPassword(auth, userData.email, password);
    
    toast.promise(promiseUser, {
      pending: "Please wait....",
      success: "User has been created successfully.",
    });

    const { user } = await promiseUser;
   
    

    if (user.uid) {
      await setClientAction({ uid:user.uid, ...rest });
      
    } else {
      return undefined;
    }
  } catch (error: any) {
    console.log(error.message);
    
  }
};

export const setClientAction = async ({ uid, ...rest }: UserData) => {
  try {
    
    if (uid) {
      
      await setDoc(doc(db, "clients", uid), rest);
    }
  } catch (error: any) {
    console.log(error.message);
  }
}

