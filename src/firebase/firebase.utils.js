import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzIZ17OFcyTqAfsUuTA_5zgwIUDe5A7XM",
    authDomain: "dan-clothing.firebaseapp.com",
    projectId: "dan-clothing",
    storageBucket: "dan-clothing.appspot.com",
    messagingSenderId: "502191941609",
    appId: "1:502191941609:web:389c6313906576a568cd78",
    measurementId: "G-JXQJLY5TVX"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();


      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  }

firebase.initializeApp(firebaseConfig);

export const auth =firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 
    prompt: 'select_account' 
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;