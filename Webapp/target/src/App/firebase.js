import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAetGLe4Xa1f4rbBu8ki7RW3sCbBaIbKBw",
    authDomain: "myproject-3628a.firebaseapp.com",
    projectId: "myproject-3628a",
    storageBucket: "myproject-3628a.appspot.com",
    messagingSenderId: "584242354404",
    appId: "1:584242354404:web:4bfc3123dd77ed8ba0f4f1",
    measurementId: "G-2Y162H4632"
};
  
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);    