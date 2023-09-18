import { Disclosure } from "@headlessui/react";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <Disclosure as="nav" className="bg-gray-800 h-auto   text-white">
        <div className=" p-4 py-16 sm:py-24 lg:py-32 flex justify-between flex-wrap">
          <div className="flex flex-col sm:flex-row justify-evenly w-screen gap-4 gap-y-6">
            <div className="">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Want product news and updates?
              </h2>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Sign up for our newsletter.
              </h2>
            </div>
            <div className="max-w-xl w-full lg:max-w-lg">
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-md pl-2 mt-2 tracking-tight text-white sm:text-sm">
                We care about your data. Read our privacy policy.
              </p>
            </div>
          </div>
        </div>
      </Disclosure>
      <hr />
      <Disclosure as="nav" className="bg-gray-800 h-auto   text-white">
        <div className=" p-4 py-16 sm:py-24 lg:py-28 flex justify-between flex-wrap">
          <div className="flex flex-col sm:flex-row justify-evenly w-screen gap-4 gap-y-10">
            <div className="flex flex-col  items-center justify-center sm:items-stretch sm:justify-start ">
              <div className="flex flex-shrink-0 items-center text-white  ">
                <Link to="/">
                  <img className="h-44 w-auto " src={Logo} alt="Your Company" />
                </Link>
              </div>

              <div className="mt-2">
                <ul className="flex justify-center gap-5 text-2xl">
                  <li className="text-gray-400 hover:text-white">
                    <Link to="/">
                      <BsFacebook />
                    </Link>
                  </li>
                  <li className="text-gray-400 hover:text-white">
                    <Link to="/">
                      <BsInstagram />
                    </Link>
                  </li>
                  <li className="text-gray-400 hover:text-white">
                    <Link to="/">
                      <BsTwitter />
                    </Link>
                  </li>
                  <li className="text-gray-400 hover:text-white">
                    <Link to="/">
                      <BsYoutube />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" flex  justify-center  items-start gap-32 ">
              <div className="flex flex-col  items-center justify-center sm:items-stretch sm:justify-start">
                <ul className="flex flex-col gap-3">
                  <li className="font-bold">Get Help</li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/">Shipping & Delivery</Link>
                  </li>
                  <li>
                    <Link to={`/productList/men`}>Men</Link>
                  </li>
                  <li>
                    <Link to={`/productList/women`}>Women</Link>
                  </li>
                  <li>
                    <Link to={`/productList/kids`}>Kids</Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col  items-center justify-center sm:items-stretch sm:justify-start">
                <ul className="flex flex-col gap-3">
                  <li className="font-bold">Legal</li>
                  <li>
                    <Link to="/">Refund</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy</Link>
                  </li>
                  <li>
                    <Link to="/">Terms</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <hr />
          <p className="py-1 text-center">
            © 2023 Shoe Trek. All rights reserved.
          </p>
        </div>
      </Disclosure>
    </>
  );
};

export default Footer;
