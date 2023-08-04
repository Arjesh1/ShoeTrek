import React, { ChangeEvent, useState, useEffect } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import {Link, useNavigate} from 'react-router-dom'
import Logo from '../../components/assets/images/dark logo.png'
import { loginClientAction } from './userAction'
import { useAppDispatch } from "../../hooks";
import ForgetPassword from '../../components/modal/ForgetPassword'
import { setForgetPassword } from '../../system/cartSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const Login = () => {
  const dispatch= useAppDispatch()
  const navigate = useNavigate()
  const { user  }: any = useSelector((state: RootState) => state.user)


  useEffect(()=>{
if(user.uid){
  navigate("/")
}

  },[user.uid, navigate])

  
interface FormState {
  email: string;
  password: string;
}



const [form, setForm] = useState<FormState>({
  email: '',
  password: '',

});



const handleOnChange = (e: ChangeEvent<HTMLInputElement>) =>{
  const { name, value } = e.target;
  setForm((data) => ({
    ...data,
    [name]: value,
  }));

}

const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setForm({
    email: '',
    password: '',
  });   

  ;
  

    await dispatch(loginClientAction(form));
    
  
   
    
};

  return (
    <>
<ForgetPassword/>

    <MainLayout>

        <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <div className="flex justify-center ">
          <img
                    className="h-50 w-auto"
                    src={Logo}
                    alt="Your Company"
                  />

          </div>
        
          
          <h2 className=" mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
          <form className="space-y-6"  onSubmit={handleOnSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={handleOnChange}
                  className="block w-full rounded-md border-2 sm:border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 sm:ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label  className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <button 
                  type='button'
                  onClick={()=>{dispatch(setForgetPassword(true))}} className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={handleOnChange}
                  className="block w-full rounded-md border-2 sm:border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to="/register"className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register Now!
            </Link>
          </p>
        </div>
      </div>
        </>



    </MainLayout>
      
    </>
  )
}

export default Login
