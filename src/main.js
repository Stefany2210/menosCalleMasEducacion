import { initRoute } from './routes.js';

// Initialize Firebase
export const initFirebase = () => {
  const config = {
    apiKey: "AIzaSyAijAiMyGhkHKg9tw9I_aBBosW6Re2jOrY",
    authDomain: "maseducacion-3245d.firebaseapp.com",
    databaseURL: "https://maseducacion-3245d.firebaseio.com",
    projectId: "maseducacion-3245d",
    storageBucket: "maseducacion-3245d.appspot.com",
    messagingSenderId: "228618106285",

  };


  firebase.initializeApp(config);
}

window.addEventListener('load', () => {
  initFirebase();
  initRoute();
});
