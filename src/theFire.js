import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBuAgtFZwSuOFrxeqMmTedQHBZJO-7z0iI",
    authDomain: "netflix-clone-cat.firebaseapp.com",
    projectId: "netflix-clone-cat",
    storageBucket: "netflix-clone-cat.appspot.com",
    messagingSenderId: "857947619331",
    appId: "1:857947619331:web:db1a7e309676aacf608e36"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore() //fallow the suscriptions
  const auth = firebase.auth()

  export { db, auth };
  // export default db;