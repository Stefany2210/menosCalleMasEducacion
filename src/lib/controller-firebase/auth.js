export const funcLogin = (emailLogIn, passwordLogIn) => firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn);
