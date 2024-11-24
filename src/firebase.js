// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
// import "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3imjLHnwEJJXLhEjjUbsMy0Ph8NvqNi4",
  authDomain: "vickey-admin.firebaseapp.com",
  projectId: "vickey-admin",
  storageBucket: "vickey-admin.firebasestorage.app",
  messagingSenderId: "403200756661",
  appId: "1:403200756661:web:35d5dc94138d01b3cb67fc",
  measurementId: "G-VEH0VQCD8M"
};

// Firebase 초기화
// const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);

// Firebase Authentication 가져오기
// export const auth = firebaseApp.auth();
export const auth = getAuth(firebaseApp);

export default firebaseApp;

