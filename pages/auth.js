/*import { getAuth } from '@firebase/auth';
import React from 'react';
import  StyledFirebaseAuth  from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../firebase/clientApp';
//import { EmailAuthProvider } from 'react-firebaseui';

//COnfigure FirebaseUI.
const uiConfig = {
    //Redirect to / after sign in successful. 
    signInSuccessUrl: "/",
    //We will display Email as auth provider.
    SignInOptions: [ {
        provider: getAuth.EmailAuthProvider.PROVIDER_ID,
    requireDisplayName: true }
]
};

function SignInScreen(){
    return (
        <div className="flex justify-center max-w-xs">
            <h1>Prijava na Ugosti.me</h1>
            <p>Prijavite se:</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={getAuth()}/>

        </div>

    )
}

export default SignInScreen;*/