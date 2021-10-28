import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";





export default function LoginForm() {

  

  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <Link href="/">
              <h2 className="text-2xl text-center font-serif font-semibold grid-flow-col-dense p-5">
                Ugosti.me
              </h2>
            </Link>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Prijavi se na svoj nalog
            </h2>
          </div>

          <div className="mt-8">
            <div>
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Prijavi se putem naloga
                </p>

                <div className="mt-1 grid grid-cols-3 gap-3">
                  <div key="facebook-login">
                    <a
                      href="https://facebook.com/"
                      className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm bg-white text-sm font-medium text-red-400 hover:bg-gray-50"
                    >
                      <span className="sr-only">
                        Prijavi se putem Facebook-a
                      </span>
                      <div>
                        <FontAwesomeIcon icon={faFacebook} />
                      </div>
                    </a>
                  </div>

                  <div key="google-login">
                    <a
                      href="#"
                      className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm bg-white text-sm font-medium text-red-400 hover:bg-gray-50"
                    >
                      <span className="sr-only">
                        Prijavi se preko Twitter-a
                      </span>
                      <div>
                        <FontAwesomeIcon icon={faGoogle} />
                      </div>
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm bg-white text-sm font-medium text-red-400 hover:bg-gray-50"
                    >
                      <span className="sr-only">Sign in with GitHub</span>
                      <span className="sr-only">
                        Prijavi se preko Twitter-a
                      </span>
                      <div>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Ili nastavi
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <form action="#" method="POST" className="space-y-6"  >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                  Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                     type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-400 focus:border-red-300 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Lozinka
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-400 focus:border-red-300 sm:text-sm "
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-red-400  focus:ring-red-300 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Zapamti
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-red-300 hover:text-red-500"
                    >
                      Zaboravili ste lozinku?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4  shadow-sm text-sm border border-transparent font-medium rounded-full text-white bg-red-400 hover:bg-red-300 focus:ring-red-500  
                      cursor-pointer hover:shadow-lg active:scale-95 active:bg-red-200 transition duration-100 ease-out;"
                  >
                    Prijavi se
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute h-full w-full  object-cover"
          src="https://images.unsplash.com/photo-1612735570323-74b04fadcccb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
          alt=""
        />
      </div>
    </div>
  );
}


