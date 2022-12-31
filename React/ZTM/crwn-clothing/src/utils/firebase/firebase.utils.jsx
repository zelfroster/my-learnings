import { initializeApp } from 'firebase/app'

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmW2DkVWfMWYsi-ZQgx_PRrSlRZErE6t8",
  authDomain: "crwn-clothing-db-f19a4.firebaseapp.com",
  projectId: "crwn-clothing-db-f19a4",
  storageBucket: "crwn-clothing-db-f19a4.appspot.com",
  messagingSenderId: "626073356376",
  appId: "1:626073356376:web:039ced514c7edc25b7622d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
{/* export const signInWithGoogleRedirect = () => */}
{/*   signInWithRedirect(auth, googleProvider); */}

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error in user creation ', error.message);
    }
  }

  return userDocRef;
}
