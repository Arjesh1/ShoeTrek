import { doc, getDoc, setDoc } from "firebase/firestore"
import { auth, db } from "../../config/firebase-config"
import { AnyAction, Dispatch } from 'redux';
import { toast } from 'react-toastify';
import { UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "./userSlice";





interface RegisterUserData {
  firstName: string  ;
  lastName: string ;
  email: string ;
  password?: string | undefined ;
  confirmPassword?: string ;
  uid?: string | undefined;
}

interface LoginUserData {
  firstName?: string  ;
  lastName?: string ;
  email?: any ;
  password?: string | undefined ;
  uid?: string | undefined;
}



// Register user and get uid and mount to db.

export const registerUserAction = async (userData: RegisterUserData): Promise<AnyAction | undefined> => {
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

// add register data to db  

export const setClientAction = async ({ uid, ...rest }: RegisterUserData) => {
  try {
    
    if (uid) {
      
      await setDoc(doc(db, "clients", uid), rest);
    }
  } catch (error: any) {
    console.log(error.message);
  }
}

// login to the user account, get user data and mount it to redux store

 

export const loginClientAction =  async (userData: LoginUserData): Promise<AnyAction | undefined> => {

  
  try {
    const { password, email } = userData;
    if (!password) {
      throw new Error("Password is required.");
    }
    const promiseUser: Promise<UserCredential> = signInWithEmailAndPassword(auth, email, password);
    
    toast.promise(promiseUser, {
      pending: "Please wait....",
      success: "Login has been successfully.",
    });

    const { user } = await promiseUser;
    if (user.uid) {
      await getClientAction(dispatch, { uid:user.uid });
      
    } else {
      return undefined;
    }
  } catch (error: any) {
    console.log(error.message);
    
  }
};

//get user data basen on login user uid
export const getClientAction = async ( dispatch: Dispatch, { uid }: LoginUserData) => {
  try {
    
    if (uid) {
      const docSnap = await getDoc(doc(db, "clients", uid))

      if (docSnap.exists()){
          const user = {...docSnap.data(), uid}
          console.log(user);
          
          dispatch(setUser(user))
      }
      
    }
  } catch (error: any) {
    console.log(error.message);
  }
}

