
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAeSeyovao4dT70mdZsuMFzXPw8lLGD2bo",
  authDomain: "auditzy-d79e2.firebaseapp.com",
  projectId: "auditzy-d79e2",
  storageBucket: "auditzy-d79e2.appspot.com",
  messagingSenderId: "1004265213140",
  appId: "1:1004265213140:web:01f68317924bc25b37ff41",
  measurementId: "G-DWGBQBJJFQ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signWithGoogle = () => {

    return new Promise((resolve, reject) => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = {
                name: result.user.displayName,
                email: result.user.email,
                profilePic: result.user.photoURL
            };
            localStorage.setItem('name', user.name);
            localStorage.setItem('email', user.email);
            localStorage.setItem('profilePic', user.profilePic);
            localStorage.setItem('authToken', result.user.accessToken);
            localStorage.setItem('authStatus', true);
            resolve(user);
        })
        .catch((error) => {
            reject(error);
        })
    });
}
