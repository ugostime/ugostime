import 'tailwindcss/tailwind.css'
import '../styles.css'
import "../styles/globals.css"
//import {Provider} from 'next-auth/client';
//import { SessionProvider } from "next-auth/react";
//import { AuthUserProvider} from "./api/authUserContext";
//import { AuthContext} from './auth';

function App({ Component, pageProps }) {
  return(
    
//<Provider session ={pageProps.session}>
//<SessionProvider session={session}>
//<AuthUserProvider>
//<AuthContext.Provider>

<Component {...pageProps} />
//</AuthContext.Provider>

//</AuthUserProvider>

//</SessionProvider>
//</Provider>
  );
}

export default App;


