import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDG7J3AEXljimBZ_Zbi-zURgONEYVI5h_0",
  authDomain: "fir-auth-c098a.firebaseapp.com",
  projectId: "fir-auth-c098a",
  storageBucket: "fir-auth-c098a.appspot.com",
  messagingSenderId: "421526848775",
  appId: "1:421526848775:web:0d9f90f77284a2bf8d31a2",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export const db = fire.firestore();
export const auth = firebase.auth();

const gprovider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, gprovider)
    .then((result) => {
      console.log(result);
    })

    .catch((error) => {
      console.log(error);
    });
};

// const fprovider = new FacebookAuthProvider();

// export const sigInWithFacebook = () => {
//   signInWithPopup(auth, fprovider)
//     .then((result) => {
//       console.log(result);
//     })

//     .catch((error) => {
//       console.log(error);
//     });
// };

const gitprovider = new GithubAuthProvider();
export const signInWithGithub = () => {
  signInWithGithub(auth, gitprovider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default fire;
