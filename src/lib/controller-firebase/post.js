export const getUserData = (user, input) => {
    const firestore = firebase.firestore();
    return firestore.doc(`users/${user.uid}`).set({
      name: user.displayName || input,
      email: user.email,
      photo: user.photoURL || 'assets/default-user.png',
      uid: user.uid
    });
  }
  
  export const getRealTimeData = (uid, cb) => {
    const firestore = firebase.firestore();
    return firestore.collection('users').doc(uid).onSnapshot(cb)
  }
  
  