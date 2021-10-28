import React from "react";
import router, { useRouter } from "next/router";
import { useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../../firebase/clientApp";
import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";



export default function Dashboard(){

   const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    const router = useRouter()
  
    useEffect(() => {
      if (!(user)) {
        router.push('/login')
      }
    }, [user])
return  (
    <div>
<Header/>

    <div className="justify-center text-1xl font-serif font-semibold">
    <h2>Vaš profil {user?.email}</h2>
    </div>

<Footer/>
    </div>
)
}

