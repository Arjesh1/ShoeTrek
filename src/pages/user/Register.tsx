import React, { ChangeEvent, useState, useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import "./user.css";
import { registerUserAction } from "./userAction";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../components/assets/images/dark logo.png";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const { user }: any = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (user.uid) {
      navigate("/");
    }
  }, [user.uid, navigate]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    await registerUserAction(form);
    // if (result && result.type === 'REGISTER_USER_SUCCESS') {

    //   console.log('User registered successfully');
    // } else {

    //   console.log('User registration failed');
    // }
  };

  return (
    <>
      <MainLayout>
        <div className="mt-12 mb-6">
          <h1 className="text-center  text-3xl text-center  font-bold leading-9 tracking-tight text-gray-900">
            Register
          </h1>
        </div>

        <div
          className="container  p-4 m-4 my-8 mx-auto  sm:mt-2 
    flex flex-col justify-around sm:flex-row "
        >
          <div className="flex  items-center justify-center  ">
            <img src={Logo} alt="logo" className=" h-72 w-auto " />
          </div>

          {/* register form */}
          <div className="p-3">
            <div className=" ">
              <form onSubmit={handleOnSubmit}>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="firstName"
                        onChange={handleOnChange}
                        required={true}
                        className="block w-full rounded-md border-2 sm:border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="lastName"
                        onChange={handleOnChange}
                        required={true}
                        className="block w-full rounded-md border-2 sm:border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        name="email"
                        type="email"
                        onChange={handleOnChange}
                        required={true}
                        className="block w-full rounded-md border-2 sm:border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        name="password"
                        type="password"
                        onChange={handleOnChange}
                        required={true}
                        className="block w-full rounded-md border-2 sm:border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Confirm Password
                    </label>
                    <div className="mt-2">
                      <input
                        name="confirmPassword"
                        type="password"
                        onChange={handleOnChange}
                        required={true}
                        className="block w-full rounded-md border-2 sm:border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Register;
