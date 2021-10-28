import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/clientApp";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Login() {
  const [loginPassword, setLoginPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const router = useRouter();

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
router.push('/')
alert('Uspesno ste prijavljeni!')
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
   
  };

  return (
      <div>
          <Header/>
    <div className="min-h-screen bg-white flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
     
        <h4 className="text-2xl text-center font-extrabold grid-flow-col-dense p-5">Ulogovani korisnik:</h4>
     <p className="text-1xl text-center"> {user?.email}</p>



      <div>
          <Link href="/">
    <h2 className="text-2xl text-center font-serif font-semibold grid-flow-col-dense p-5" >Ugosti.me</h2>
    </Link>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Prijavi se na svoj nalog</h2>
           
          </div>

          <div className="mt-8">


      <div className="mt-6">
                <div className="mt-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    E-mail adresa
                  </label>
                  <div className="mt-1">
      <input
        placeholder="Email"
        id={loginEmail}
        type="email"
        onChange={(e) => {
          setLoginEmail(e.target.value);
        }}
        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-400 focus:border-red-300 sm:text-sm"
      />
      </div>
      </div>
        <div className="space-y-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Lozinka
                  </label>
                  <div className="mt-1">
      <input
        placeholder="Lozinka"
        id={loginPassword}
        type="password"
        onChange={(e) => {
          setLoginPassword(e.target.value);
        }}
        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-400 focus:border-red-300 sm:text-sm"
      />
      </div>
      </div>
      <div>
      <button type="submit"
        onClick={login}
        className="w-full  mt-4 flex justify-center py-2 px-4  shadow-sm text-sm border border-transparent font-medium rounded-full text-white bg-red-400 hover:bg-red-300 focus:ring-red-500  
                    cursor-pointer hover:shadow-lg active:scale-95 active:bg-red-200 transition duration-100 ease-out;"
      >
        Prijavite se!
      </button>
      <p>
                      Nemate nalog?{" "}
                     <p className="text-red-300 inline-flex py-3 hover:text-red-500"> <Link href="/signup">
                        Napravite ga!
                      </Link></p>
                    </p>
                    </div>

    
      <button
        onClick={logout}
        className="w-full flex justify-center py-2 px-4  shadow-sm text-sm border border-transparent font-medium rounded-full text-white bg-red-400 hover:bg-red-300 focus:ring-red-500  
                    cursor-pointer hover:shadow-lg active:scale-95 active:bg-red-200 transition duration-100 ease-out;"
      >
        Odjavi se
      </button>
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
    <Footer/>
    </div>
  );
}
export default Login;
