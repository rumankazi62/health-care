import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import firebaseAuth from '../Firebase/Firebase.init';

firebaseAuth()

const useFirebase = () => {
const auth = getAuth();
const [user, setUser] = useState({});
const [error, setError] = useState({});
const [isLoading, setIsLoading] = useState(true);

const googleSignIn = () => {
  setIsLoading(true);
  const googleProvider = new GoogleAuthProvider();
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    setUser(user);
  }).finally(()=> setIsLoading(false));
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

useEffect(() => {
  const unsubscribed = onAuthStateChanged(auth, user => {
      if (user) {
          setUser(user);
      }
      else {
          setUser({})
      }
      setIsLoading(false);
  });
  return () => unsubscribed;
}, [])

const logOut = () => {
  setIsLoading(true);
  signOut(auth).then(() => {
    setUser({})
}).finally(()=> setIsLoading(false));
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
  loginEmailAndPassword,
  isLoading
}
};

export default useFirebase;