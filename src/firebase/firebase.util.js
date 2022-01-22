import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBd6sHkMl9_UM5A5aZ8Agh1vWmTXRk1jGw",
    authDomain: "shopping-web-db.firebaseapp.com",
    projectId: "shopping-web-db",
    storageBucket: "shopping-web-db.appspot.com",
    messagingSenderId: "557901990822",
    appId: "1:557901990822:web:e80b97c2f65416dd7e1d67",
    measurementId: "G-8401HR1MNF"
  };

export const createUserProfileDocument = async (userAuth, additionaldata) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionaldata
      })    
    } catch (error) {
        console.log('error creating user', error.message);
    }

  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;