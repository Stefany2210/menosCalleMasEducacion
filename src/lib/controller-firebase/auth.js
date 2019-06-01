export const funcLogin = (emailLogIn, passwordLogIn) => firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn);

export const funcRegister = (emailSignIn, passwordSignIn) => firebase.auth().createUserWithEmailAndPassword(emailSignIn, passwordSignIn);

export const funcGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
  };