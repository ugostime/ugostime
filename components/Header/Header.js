import Link from "next/link";
import Head from "next/head";
import { Transition, Disclosure } from "@headlessui/react";
import { Menu } from "@headlessui/react";
import { Fragment, useState } from "react";
import { UserIcon, SearchIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; //theme css file
import { DateRange } from "react-date-range";
import { useRouter } from "next/router";

import { onAuthStateChanged } from "firebase/auth";
import firebase, { auth } from "../../firebase/clientApp";
import { signOut } from "firebase/auth";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Smestaj", href: "/smestaj" },
  { name: "Utisci", href: "/vesti" },
  { name: "Kontakt", href: "/kontakt" },
  { name: "Postanite domacin", href: "/postanite-domacin" },
];

function Header({ title, placeholder }) {
  const [searchMesto, setSearchMesto] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const handleChange = (event) => {
    setSearchMesto(event.target.value);
  };

  const handleReset = () => {
    setSearchMesto("");
  };

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchMesto,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };



  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    return await signOut(auth).then(()=>{
      router.push('/')
    }).catch((e)=>{
      console.error(e)
    })}

  const goToDashboard = async () => {
    try {
      console.log(user);
router.push('/dashboard')
alert('Dobrodosli na vas profil!')
    } catch (error) {
      console.log(error.message);
    }
  }
  /* const logoutClickHandler = () => {
        setAnchorEl(null);
        dispatch({ type: 'USER_LOGOUT' });
        Cookies.remove('userInfo');
        router.push('/');
  };
*/


  return (
    <div className="flex-shrink-0 relative items-center z-50  sm:grid sm:grid-flow-col sm:grid-cols-1  bg-white shadow-md py-5 px-5 md:px-8">
      <Head>
        <title>{title ? `${title} - Ugostime` : "Ugostime"}</title>
      </Head>

      <Disclosure as="nav" className="bg-white-800">
        {({ open }) => (
          <>
            <div className="max-w-5xl mx-auto px-1 sm:px-1 lg:px-4">
              <div className="relative flex items-center justify-between h-16">
                <div className="flex items-center px-0 lg:px-0">
                  <div className="relative flex items-center h-6 cursor-pointer my-auto">
                    <Link href="/">
                      <h2 className="font-serif font-semibold grid-flow-col-dense p-1">
                        Ugosti.me
                      </h2>
                    </Link>
                  </div>
                </div>

                <div className="min-w-0 relative opacity-100  sm:flex sm:px-0  md:px-2 lg:px-0 xl:col-span-4">
                  <div className="relative  items-center  z-50  border-2 rounded-full    border-gray-300 py-2 md:shadow-sm overflow-visible bg-white">
                    <div className="w-full">
                      <label htmlFor="search" className="sr-only"></label>
                      <div key="search-1" className="relative">
                        <input
                          value={searchMesto}
                          onChange={handleChange}
                          id="search"
                          name="search"
                          className="flex-grow pl-5 bg-transparent  sm:h-8  text-sm w-[140px] md:w-[200px]  text-gray-400 border-gray-300 outline-none sm:text-sm"
                          placeholder={placeholder || "Gde idete?"}
                          type="text"
                        />

                        <SearchIcon
                          className="hidden:h-6 h-8 sm:inline-flex inline-flex bg-red-400 text-white rounded-full
                            p-2 cursor-pointer md:space-x-2 "
                          aria-hidden="true"
                        />
                        {searchMesto && (
                          <div className="flex-shrink-0 absolute mx-auto mt-4">
                            <DateRange
                              className=" p-5"
                              ranges={[selectionRange]}
                              minDate={new Date()}
                              rangeColors={["#FD5B61"]}
                              onChange={handleSelect}
                            />
                            <div className="flex items-center border-b p-3 bg-white ">
                              <h2 className="text-2x flex-grow font-semibold ">
                                Broj gostiju
                              </h2>
                              <UserIcon className="h-5" />
                              <input
                                value={noOfGuests}
                                onChange={(e) => setNoOfGuests(e.target.value)}
                                type="number"
                                min={1}
                                className="w-12 pl-2 text-lg outline-none text-red-400"
                              />
                            </div>
                            <div className="flex p-3 bg-white">
                              <button
                                onClick={handleReset}
                                className="flex-grow  text-gray-500"
                              >
                                {" "}
                                Otkaži
                              </button>
                              <button
                                onClick={handleSearch}
                                className="flex-grow text-red-400"
                              >
                                {" "}
                                Pretraži
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden  lg:block lg:ml-2">
                  <div className="flex space-x-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-300 text-black"
                            : "text-gray-900 hover:bg-gray-300 hover:text-gray-900 cursor-pointer ",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-red-400 ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden lg:block lg:ml-4">
                  <div className="inline-flex items-center">
                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="bg-red-300 flex text-sm rounded-full">
                          <span className="inline-block h-6 w-6 rounded-full overflow-hidden bg-gray-100">
                           {!user ? ( <svg
                              className="h-full w-full text-gray-300"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg> ) : (
                              <img src={user?.photoURL} className="h-full w-full rounded-full"></img>
                            )}
                          </span>
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
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-60 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          
                          <Menu.Item>
                            
                          {user?.email ? (
                        <>
                          <div className="block px-4 py-1 ml-4 text-sm text-gray-700">
                            Prijavljeni ste 
<button type="button" onClick={goToDashboard} className={classNames(
                                      user?.email ? "bg-white-100" : "",
                                      "block  py-2  text-sm text-gray-700 hover:bg-red-200 hover:border hover:rounded-md")}>{[user?.email]}</button>
                          </div>
                          <div>
                            <button className={classNames(
                                      user?.email ? "bg-white-100" : "",
                                      "block px-4 py-2 ml-4 text-sm text-gray-700 hover:bg-red-200")}
                              type="submit"
                              onClick={logout}
                             
                            >
                              Odjavite se
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="block px-4 py-2 ml-4 text-sm text-gray-700 ">Niste Prijavljeni.</div>
                         
                        </>
                      )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <div className="block px-4 py-2 text-sm text-gray-700">
                                <Link href="/login">
                                  <a
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Prijavi me
                                  </a>
                                </Link>
                              </div>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <div className="block px-4 py-2 text-sm text-gray-700">
                                <Link href="/signup">
                                  <a
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Registrujte se
                                  </a>
                                </Link>
                              </div>
                            )}
                          </Menu.Item>
                         
                          <Menu.Item>
                            {({ active }) => (
                              <div className="block px-4 py-2 text-sm text-gray-700">
                                <Link href="/pomoc">
                                  <a
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Pomoc
                                  </a>
                                </Link>
                              </div>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    <div className="inline-flex">
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Link href="/smestaj">
                  <a className="bg-red-400 text-white block px-3 py-2 rounded-md text-base font-medium">
                    Smestaj
                  </a>
                </Link>
                <Link href="/vesti">
                  <a className="text-gray-400 hover:bg-red-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Utisci
                  </a>
                </Link>
                <Link href="/kontakt">
                  <a className="text-gray-400 hover:bg-red-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Kontakt
                  </a>
                </Link>
                <Link href="/postanite-domacin">
                  <a className="text-gray-400 hover:bg-red-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Postanite domacin
                  </a>
                </Link>
              </div>
              <div className="pt-4 pb-3 border-t border-red-400">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0"></div>
                </div>
                <div className="mt-3 px-2 space-y-1">
                     
                {user?.email ? (
                        <>
                          <div className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 ">
                          Prijavljeni ste <a href="/dashboard" className="hover:border hover:rounded-md hover:border-red-400 hover:bg-red-400 p-2 hover:text-white">  {user?.email} </a>
                          </div>
                          <div>
                            <button className={classNames(
                                      user?.email ? "bg-white-100" : "",
                                      "block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-red-400")}
                              type="submit"
                              onClick={logout}
                             
                            >
                              Odjavite se
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 ">Niste Prijavljeni.</div>
                    
                        </>
                      )}
                  <Link href="/signup">
                    <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-red-200">
                      Registujte se
                    </a>
                  </Link>
                  <Link href="/login">
                    <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-red-200">
                      Prijavi me
                    </a>
                  </Link>
                  <Link href="/pomoc">
                    <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-red-200">
                      Pomoc
                    </a>
                  </Link>
                </div>
                <div></div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/*right*/}
    </div>
  );
}

export default Header;
