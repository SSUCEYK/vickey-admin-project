// src/auth.js
import { auth } from './firebase';
// import firebase from "firebase/app";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google 로그인 성공:", user);
      return user;
    } catch (error) {
      console.error("Google 로그인 에러:", error);
      return null;
    }
  };

// export const googleLogin = async () => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   try {
//     const result = await auth.signInWithPopup(provider);
//     const user = result.user;
//     console.log('Google 로그인 성공: ', user);
//     return user;
//   } catch (error) {
//     console.error('Google 로그인 에러: ', error);
//   }
// };
