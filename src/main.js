import { initRoute } from './routes.js';

  // Your web app's Firebase configuration
  export const initFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAijAiMyGhkHKg9tw9I_aBBosW6Re2jOrY",
    authDomain: "maseducacion-3245d.firebaseapp.com",
    databaseURL: "https://maseducacion-3245d.firebaseio.com",
    projectId: "maseducacion-3245d",
    storageBucket: "maseducacion-3245d.appspot.com",
    messagingSenderId: "228618106285",
    appId: "1:228618106285:web:f5409e087ef58b1e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
  window.addEventListener('load', () => {
    initFirebase();
    initRoute();
  });