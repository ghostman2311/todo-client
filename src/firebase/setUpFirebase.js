// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const setUpFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBKqG3TyXNWuJ4sYrvVP6ft-8zQpUP77w8",
    authDomain: "note-sharing-app-65c73.firebaseapp.com",
    projectId: "note-sharing-app-65c73",
    storageBucket: "note-sharing-app-65c73.appspot.com",
    messagingSenderId: "350077823010",
    appId: "1:350077823010:web:db9c4343bd88f613ac427b",
  };

  initializeApp(firebaseConfig);
};

export { setUpFirebase };
