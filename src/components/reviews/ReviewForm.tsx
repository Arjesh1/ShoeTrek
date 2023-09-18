import React, { Fragment, useRef, useState, ChangeEvent } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setReviewForm } from "../../system/cartSlice";
import FormRatings from "../ratings/FormRatings";
import { addReviewAction } from "./reviewsAction";
import { RootState } from "../../store";
import { ReviewType } from "../interfaces/interface";

interface OrderDetailProps {
  orderDetails: ReviewType;
}

const ReviewFormsModal = ({ orderDetails }: OrderDetailProps) => {
  const dispatch = useDispatch();
  const { reviewForm } = useSelector((state: RootState) => state.system);
  const cancelButtonRef = useRef(null);
  const [rating, setRating] = useState<number>(5);
  const [form, setForm] = useState<ReviewType>({});

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value, rating, ...orderDetails });
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addReviewAction(form));
  };

  return (
    <>
      <Transition.Root show={reviewForm} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={() => dispatch(setReviewForm(false))}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full  items-end justify-center p-4 text-center items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                  <div className="bg-white px-4 py-9 ">
                    <form className="space-y-6 px-5" onSubmit={handleOnSubmit}>
                      <div className="py-2 border-b border-slate-600 ">
                        <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl text-center">
                          Give Feedback
                        </h1>
                      </div>

                      <div className="">
                        <FormRatings
                          value={rating}
                          onChange={handleRatingChange}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          Description
                        </label>

                        <div className="mt-2">
                          <input
                            name="description"
                            type="text"
                            required
                            onChange={handleOnChange}
                            className="block w-full rounded-md border-2 sm:border-0 pl-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-md bg-blue-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default ReviewFormsModal;
