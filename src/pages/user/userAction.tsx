import { doc, setDoc } from "firebase/firestore"
import { auth, db } from "../../config/firebase-config"
import { AnyAction } from 'redux';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from "firebase/auth";



interface UserData {
 
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    uid?: string
  }

  export const registerUserAction = async (userData: UserData): Promise<AnyAction | undefined> => {
    try {
      const { password, confirmPassword, ...rest } = userData;
      const promiseUser: Promise<UserCredential> = createUserWithEmailAndPassword(auth, userData.email, password);
      
      toast.promise(promiseUser, {
        pending: "Please wait....",
        success: "User has been created successfully.",
      });
  
      const { user } = await promiseUser;
  
      if (user?.uid) {
        await setClientAction({ uid: user.uid, ...rest });
        return { type: 'REGISTER_USER_SUCCESS', payload: userData };
      } else {
        return undefined;
      }
    } catch (error: any) {
      console.log(error.message);
      return Promise.resolve({ type: 'REGISTER_USER_FAILURE', payload: error.message });
    }
  };
  
  export const setClientAction = async ({ uid, confirmPassword, ...rest }: UserData) => {
    try {
     
      await setDoc(doc(db, "clients", uid), rest);
      return {
            type: 'REGISTER_USER_SUCCESS',
            payload: rest,
            
          };
    } catch (error: any) {
      console.log(error.message);
    }
  }

  // try {
  //   await setDoc(doc(db, "clients", "new-user-id"), data);
  //   toast.success('User registered successfully');
  //   return {
  //     type: 'REGISTER_USER_SUCCESS',
  //     payload: data,
      
  //   };
    
  // } catch (error: any) {
  //   return {
  //     type: 'REGISTER_USER_FAILURE',
  //     payload: error.message,
  //   };
  // }