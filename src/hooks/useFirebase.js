import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebaseAuth from '../Firebase/Firebase.init';

firebaseAuth()

const useFirebase = () => {
const auth = getAuth();
const [user, setUser] = useState({});
const [error, setError] = useState({});

const googleSignIn = () => {
  const googleProvider = new GoogleAuthProvider();
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    setUser(user);
    console.log(user);
  }).catch((error) => {
    setError(error.message);
  });
}

const createUserWithEmail = ( email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
          const user = result.user;
          setUser(user);
      }).catch((error) => {
          setError(error.message);
      })
}



const logOut = () => {
  signOut(auth).then(() => {
    setUser({})
}).catch((error) => {

});
}

const loginEmailAndPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    setUser(user)
  })
  .catch((error) => {;
    setError(error.message);
  });
}

return{
  user,
  error,
  googleSignIn,
  logOut,
  createUserWithEmail,
  loginEmailAndPassword
}
};

export default useFirebase;