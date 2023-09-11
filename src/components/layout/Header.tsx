import { Fragment, useState, useEffect } from "react";
import {
  Disclosure,
  Menu,
  Transition,
  Dialog,
  Popover,
  Tab,
} from "@headlessui/react";
import { FaCartPlus, FaUserAlt, FaUserCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/images/logo.png";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineDown } from "react-icons/ai";
import ShopingCart from "../../pages/product/ShopingCart";
import { useDispatch, useSelector } from "react-redux";
import { setCartShow, setSearchShow } from "../../system/cartSlice";
import { RootState } from "../../store";
import ProductCard from "../product/ProductCard";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { setUser } from "../../pages/user/userSlice";
import { toast } from "react-toastify";
import { UserType } from "../interfaces/interface";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "Shop All women",
          href: "/productList/women",
          imageSrc:
            "https://images.pexels.com/photos/8968694/pexels-photo-8968694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          imageAlt: "image",
        },
        {
          name: "Trending",
          href: "/productList/women-trending",
          imageSrc:
            "https://images.pexels.com/photos/5026387/pexels-photo-5026387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          imageAlt: "image",
        },

        {
          name: "Shop Women Sales",
          href: "/productList/women-sales",
          imageSrc:
            "https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          imageAlt: "image",
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "Shop All Men",
          href: "/productList/men",
          imageSrc:
            "https://images.pexels.com/photos/15113597/pexels-photo-15113597/free-photo-of-young-people-in-casual-clothes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          imageAlt: "image",
        },
        {
          name: "Men Trending",
          href: "/productList/men-trending",
          imageSrc:
            "https://images.pexels.com/photos/5264913/pexels-photo-5264913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          imageAlt: "image",
        },

        {
          name: "Men Sales",
          href: "/productList/men-sales",
          imageSrc:
            "https://images.pexels.com/photos/906361/pexels-photo-906361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          imageAlt: "image",
        },
      ],
    },
    {
      id: "kids",
      name: "Kids",
      featured: [
        {
          name: "Shop All Kids",
          href: "/productList/kids",
          imageSrc:
            "https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          imageAlt: "image",
        },
        {
          name: "Kids Trending",
          href: "/productList/kids-trending",
          imageSrc:
            "https://images.pexels.com/photos/5623675/pexels-photo-5623675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          imageAlt: "image",
        },
        {
          name: "Kids Sales",
          href: "/productList/kids-sales",
          imageSrc:
            "https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg",
          imageAlt: "image",
        },
      ],
    },

    {
      id: "sales",
      name: "Sales",
      featured: [
        {
          name: "Shop All Sale",
          href: "/productList/sales",
          imageSrc:
            "https://images.pexels.com/photos/5325588/pexels-photo-5325588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          imageAlt: "image",
        },
        {
          name: "Shop Men Sale",
          href: "/productList/men-sales",
          imageSrc:
            "https://images.pexels.com/photos/1462231/pexels-photo-1462231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          imageAlt: "image",
        },
        {
          name: "Shop Women Sale",
          href: "/productList/women-sales",
          imageSrc:
            "https://images.pexels.com/photos/7202783/pexels-photo-7202783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          imageAlt: "image",
        },
        {
          name: "Shop Kids Sale",
          href: "/productList/kids-sales",
          imageSrc:
            "https://images.pexels.com/photos/5623031/pexels-photo-5623031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          imageAlt: "image",
        },
      ],
    },
  ],
};

export const Header = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const { cart, product } = useSelector((state: RootState) => state.product);
  const { search } = useSelector((state: RootState) => state.system);
  const { user } = useSelector((state: RootState) => state.user) as {
    user: UserType;
  };

  useEffect(() => {
    if (searchValue.length === 0) {
      dispatch(setSearchShow(false));
    } else {
      dispatch(setSearchShow(true));
    }
  }, [dispatch, searchValue.length]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    const filteredItem = product.filter((item: any) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setDisplay(filteredItem);
  };

  const cartItem: number = cart?.reduce(
    (acc: number, item: any) => acc + item.quantity,
    0
  );

  const handleOnClick = () => {
    dispatch(setCartShow(true));
  };

  const handleOnLogOut = () => {
    signOut(auth).then(() => {
      dispatch(setUser({}));
      toast.success("LogOut Successful");
    });
  };

  return (
    <>
      <ShopingCart />
      {/* logo and cart */}
      <Disclosure as="nav" className="bg-gray-800  ">
        <div className="mx-auto max-w-7xl px-2 py-1 sm:px-6 lg:px-8  ">
          <div className="relative flex h-16 items-center sm:justify-between">
            <div className="flex  items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center text-white">
                <Link to="/">
                  <img
                    className="h-14  sm:h-20 w-auto"
                    src={Logo}
                    alt="Company Logo"
                  />
                </Link>
              </div>
            </div>

            <div className=" w-56 sm:w-96 px-2 ">
              <form className=" ">
                <label className="relative block w-auto sm:w-full">
                  <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300  rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm bg-white text-center "
                    placeholder="Search Product..."
                    type="text"
                    name="search"
                    onChange={handleOnChange}
                  />

                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                      <BiSearchAlt />
                    </svg>
                  </span>
                </label>
              </form>
            </div>

            <div className="absolute  gap-2 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="">
                <button
                  type="button"
                  onClick={handleOnClick}
                  className="rounded-full bg-gray-800  p-1 text-gray-400 hover:text-white focus:outline-none  focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  {!cart.length ? (
                    <>
                      <FaCartPlus
                        className="h-6 w-6 sm:h-8 sm:w-8 "
                        aria-hidden="true"
                      />
                    </>
                  ) : (
                    <>
                      <span className=" relative">
                        <p className="text-white absolute top-0 right-0 px-2 rounded-full bg-red-500 text-sm font-small text-center">
                          {cartItem}
                        </p>
                        <FaCartPlus
                          className="h-6 w-6 sm:h-8 sm:w-8 "
                          aria-hidden="true"
                        />
                      </span>
                    </>
                  )}
                </button>
              </div>

              {/* Profile dropdown */}

              <div className="">
                {!user?.uid ? (
                  <>
                    <Link to="/login">
                      <div className="flex gap-1 items-center text-white ">
                        <span className="  text-lg">
                          <FaUserAlt />
                        </span>
                        <p className="  hidden sm:block "> Login/Register</p>
                      </div>
                    </Link>
                  </>
                ) : (
                  <>
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <FaUserCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white bg-gray-800   text-gray-400 hover:text-white focus:outline-none  focus:ring-offset-2 focus:ring-offset-gray-800" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/user-details"
                                className={classNames(
                                  active ? "bg-gray-100 " : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/order-history"
                                className={classNames(
                                  active ? "bg-gray-100 " : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Order History
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={handleOnLogOut}
                                className={classNames(
                                  active ? "bg-gray-100 w-full" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Log out
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Disclosure>

      {/* category  */}

      <div className="bg-gray-800 ">
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pb-2 pt-5">
                    <button
                      type="button"
                      className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setOpen(false)}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close menu</span>
                      <RxCross1 className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Links */}
                  <Tab.Group as="div" className="mt-2">
                    <div className="border-b border-gray-200">
                      <Tab.List className="-mb-px flex space-x-8 px-4">
                        {navigation.categories.map((category) => (
                          <Tab
                            key={category.name}
                            className={({ selected }) =>
                              classNames(
                                selected
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-900",
                                "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                              )
                            }
                          >
                            {category.name}
                          </Tab>
                        ))}
                      </Tab.List>
                    </div>
                    <Tab.Panels as={Fragment}>
                      {navigation.categories.map((category) => (
                        <Tab.Panel
                          key={category.name}
                          className="space-y-10 px-4 pb-8 pt-10"
                        >
                          <div className="grid grid-cols-2 gap-x-4">
                            {category.featured.map((item) => (
                              <div
                                key={item.name}
                                className="group relative text-sm mb-7"
                              >
                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                  <img
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    className="object-cover object-center"
                                  />
                                </div>
                                <Link
                                  to={item.href}
                                  className="mt-6 block font-medium text-gray-900"
                                  onClick={() => setOpen(false)}
                                >
                                  <span
                                    className="absolute inset-0 z-10"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                                <p aria-hidden="true" className="mt-1">
                                  Shop now
                                </p>
                              </div>
                            ))}
                          </div>
                        </Tab.Panel>
                      ))}
                    </Tab.Panels>
                  </Tab.Group>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <header className="relative  bg-gray-800 border-t-2 border-white">
          <nav
            aria-label="Top"
            className=" mx-auto flex  justify-start lg:justify-center max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center">
                <button
                  type="button"
                  className="relative rounded-md p-2 text-white lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <GiHamburgerMenu className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Flyout menus */}
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-50">
                  <div className="flex h-full space-x-8">
                    {navigation.categories.map((category) => (
                      <Popover key={category.name} className="flex  ">
                        {({ open }) => (
                          <>
                            <div className="relative flex">
                              <Popover.Button
                                className={classNames(
                                  open
                                    ? "border-red text-white"
                                    : "border-transparent text-white hover:text-slate-300",
                                  "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                                )}
                              >
                                {category.name}
                              </Popover.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                <div
                                  className="absolute inset-0 top-1/2 bg-white shadow"
                                  aria-hidden="true"
                                />

                                <div className="relative bg-white">
                                  <div className="mx-auto max-w-7xl px-8">
                                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 py-16">
                                      <div className="col-start-2 grid grid-cols-4 gap-x-8 gap-y-8">
                                        {category.featured.map((item) => (
                                          <div
                                            key={item.name}
                                            className="group relative text-base sm:text-sm"
                                          >
                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                              <img
                                                src={item.imageSrc}
                                                alt={item.imageAlt}
                                                className="object-cover object-center"
                                              />
                                            </div>
                                            <Link
                                              to={item.href}
                                              className="mt-6 block font-medium text-gray-900 "
                                            >
                                              <span
                                                className="absolute inset-0 z-10"
                                                aria-hidden="true"
                                              />
                                              {item.name}
                                            </Link>
                                            <p
                                              aria-hidden="true"
                                              className="mt-1"
                                            >
                                              Shop now
                                            </p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    ))}
                  </div>
                </Popover.Group>
              </div>
            </div>
          </nav>
        </header>
      </div>

      {/* search button and results */}
      <div className="">
        {search === false ? (
          <></>
        ) : (
          <>
            {!display.length ? (
              <>
                <p className="text-center py-5">Product Not found</p>
              </>
            ) : (
              <>
                <div className=" d-flex justify-content-center flex-wrap gap-4">
                  <ProductCard
                    product={display}
                    category="all"
                    heading="Search Result"
                    link="Show All Product"
                    icon={<AiOutlineArrowRight className=" pl-1 mt-2" />}
                  />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};
