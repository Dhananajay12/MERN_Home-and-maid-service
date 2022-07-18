

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import 'firebase/compat/database'
const firebaseConfig = {
    apiKey: "AIzaSyC8HbgYrTUR6kqiEpiHbU_ST2MFOItaCAo",
    authDomain: "auth-development-d8d2d.firebaseapp.com",
    projectId: "auth-development-d8d2d",
    storageBucket: "auth-development-d8d2d.appspot.com",
    messagingSenderId: "966315942294",
    appId: "1:966315942294:web:ea680d28530fcf5dc0bdb7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

  
