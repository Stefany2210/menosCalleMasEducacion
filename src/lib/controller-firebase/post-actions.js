export const privacyPost = () => {
    const firestore = firebase.firestore();
    return firestore.collection('posts').doc(id).update({
        privacy: privacyState
    })
}
