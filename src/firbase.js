import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDadwmBPK5Zx71vtEdACiStzQRPjrDxyZU",
    authDomain: "django-crm-3c162.firebaseapp.com",
    projectId: "django-crm-3c162",
    storageBucket: "django-crm-3c162.appspot.com",
    messagingSenderId: "285936917329",
    appId: "1:285936917329:web:b28c2c989777b0ac1d1170",
    measurementId: "G-XNK2VNWC3L"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);