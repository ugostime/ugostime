import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import MediumCard from '../components/MediumCard';
import Footer from '../components/Footer/Footer';
import React from "react";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/clientApp";
//import { useSession, SignOut, SignIn } from "next-auth";
//import { useRouter } from "next/router";
//import { useAuthState } from "react-firebase-hooks/auth";
//import { getAuth } from "firebase/auth";
//import { useAuth } from "./api/authUserContext";
//import firebase from "../firebase/clientApp";




 export default function Home( ) {

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  
 
 // const { data: session} = useSession();
 // console.log("session", session);
//const router = useRouter();
//Destruture user,loading and error out of the hook.
//const [authUser, loading, error] = useAuthState(getAuth());
//console.log the current user and loading status
//console.log("Loading", loading, "|", "Current user:", authUser );


  return (
    <div>
     <Header title="Početna" />

  {/*session ? <button onClick={()=> SignOut()}>Odjavi se</button> : <button onClick={()=> SignIn()}>Prijavi se</button>*/}
     
      <Banner>
        <div className="absolute inset-0">
     
      </div>
      </Banner> 
    

    <main className='max-w-7x1 mx-auto px-8 sm:px-16'>
  
      <section className='pt-6'>
      <MediumCard/>
      </section>
  </main>

  

   <Footer/>
     
    </div>
  );
}



