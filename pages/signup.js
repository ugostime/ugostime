import React from "react";
import Link from "next/link";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";
import firebase, { auth } from "../firebase/clientApp";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useRouter } from "next/router";

function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

 const router = useRouter();

 
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

 
   

  const register = async () =>{
    await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      router.push('/')
     // console.log(user);
      alert('Uspesno ste se registrovali')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

    await  sendEmailVerification(auth.currentUser)
    .then(() => {
      // Email verification sent!
      // ...
    });
  
  }
/*
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      router.push('/')
alert('Uspesno ste se registrovali!')
    } catch (error) {
      console.log(error.message);
    }
  };*/




  return (
      <div>
          <Header title="Registracija"/>
    <div className="min-h-screen bg-white flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">

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
        id={registerEmail}
        type="email"
        onChange={(e) => {
          setRegisterEmail(e.target.value);
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
        id={registerPassword}
        type="password"
        onChange={(e) => {
          setRegisterPassword(e.target.value);
        }}
        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-400 focus:border-red-300 sm:text-sm"
        />
        </div>
        </div>
      <button type="submit"
        onClick={register}
        className="w-full mb-2 mt-4 flex justify-center py-2 px-4  shadow-sm text-sm border border-transparent font-medium rounded-full text-white bg-red-400 hover:bg-red-300 focus:ring-red-500  
        cursor-pointer hover:shadow-lg active:scale-95 active:bg-red-200 transition duration-100 ease-out;"
      >
        Registrujte se
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
export default SignUp;
