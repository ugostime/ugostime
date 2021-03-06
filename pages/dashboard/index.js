import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { onAuthStateChanged, reload, updateProfile } from "@firebase/auth";
import { auth } from "../../firebase/clientApp";
import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProfileInfo from "../../components/ProfileInfo";

import {
  CheckIcon,
  PaperClipIcon,
  ThumbUpIcon,
  UserIcon,
} from '@heroicons/react/solid'



const slike= [
  { name: 'Slika1', href: 'https://images.unsplash.com/photo-1517467139951-f5a925c9f9de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' },
  { name: 'Slika2', href: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' },
]





export default function Dashboard(){

   //const [user, setUser] = useState({});

   // onAuthStateChanged(auth, (user) => {
     // setUser(user);
    //});
  
    const user = auth.currentUser;
    const [,setUser] = useState();
    const router = useRouter();
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
    
      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
    }

    

    onAuthStateChanged(auth, (user) => {
      setUser(user);
      if(user){
        
    } else {
    router.push('/login')
    }
    });
/*
    updateProfile(user, {
      displayName: "Jana Petrovic", photoURL: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80'
    }).then((response) => {
      console.log(response)

      
     
    }).catch((error) => {
      console.log(error.message);
      // An error occurred
      // ...
    });*/
  /*
    useEffect(() => {
      if (!user)  {
        router.push('/login')
      }
    }, [])*/

    if(user){
return  (
    <div>
<Header title={`${user?.displayName} - Profil` }/>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-serif font-semibold m-4"  >
    <h2>Va?? profil {user?.email}</h2>
 

    <div className="min-h-full">

<div className="py-10">
{/* Page header */}
<div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
  <div className="flex items-center space-x-5">
    <div className="flex-shrink-0">
      <div className="relative">
        <img
          className="h-16 w-16 rounded-full"
         src={user.photoURL}          
         alt=""
        />
        <span className="absolute inset-0 shadow-inner rounded-full" aria-hidden="true" />
      </div>
    </div>
    <div>
      <h1 className="text-2xl font-bold text-gray-900">{user.displayName}</h1>
     
    </div>
  </div>

</div>

<div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
  <div className="space-y-6 lg:col-start-1 lg:col-span-2">
    {/* Description list*/}
    <section aria-labelledby="applicant-information-title">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 id="applicant-information-title" className="text-lg leading-6 font-medium text-gray-900">
            Informacije o korisniku
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Rezervisano</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Smestaj</dt>
              <dd className="mt-1 text-sm text-gray-900">Broj 1</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Email adresa</dt>
              <dd className="mt-1 text-sm text-gray-900">{user.email}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Cena</dt>
              <dd className="mt-1 text-sm text-gray-900">150 EUR</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Telefon</dt>
              <dd className="mt-1 text-sm text-gray-900"> Broj telefona</dd>
            </div>
           
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Sike</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                  {slike.map((attachment) => (
                    <li
                      key={attachment.name}
                      className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                    >
                      <div className="w-0 flex-1 flex items-center">
                        <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <img src={attachment.href} className="h-40 w-120"></img>
                      </div>
                    
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
       
      </div>
    </section>

   
   
  </div>

</div>
</div>
</div>


   

<Footer/>
    </div>
    </div>
)}

else return (

  <div>

  </div>
)

}