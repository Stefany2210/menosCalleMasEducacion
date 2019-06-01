const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
const mockdatabase = new firebasemock.MockFirebase();


export const mocksdk = new firebasemock.MockFirebaseSdk(
  (path) => {
    return path ? mockdatabase.child(path) : null
  },
  () => {
    return mockauth;
  },
  () => {
    return mockstorage;
  }
);

mockauth.autoFlush();
global.firebase = mocksdk;

import { funcLogin, funcRegister, funcFacebook, funcGoogle, signOut, activeUser, currentUser } from "../src/lib/controller-firebase/auth.js";

