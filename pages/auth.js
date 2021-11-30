import React,{ useState, useEffect, useContext, createContext } from "react";
import nookies from "nookies";
import clientApp from "../firebase/clientApp";
import firebase from "firebase/app";
import { getAuth }from "firebase/auth"
import "firebase/auth";


const AuthContext = createContext({});

 const AuthContextProvider = ({ children }) => {
  //clientApp();
  const [user, setUser] = useState(null);

  useEffect(() => {
    return getAuth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "token", "", {});
        
        return;
      }
      const token = await user.getIdToken();
      setUser(user);
      nookies.set(undefined, "token", token, {});
      expires: 1/24
    });
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
