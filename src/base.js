import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCbU6ZMTJF03v68XcJxjKHKwDKLLxNSb2w",
    authDomain: "skated8-91010.firebaseapp.com",
    databaseURL: "https://skated8-91010-default-rtdb.firebaseio.com/",
    projectId: "skated8-91010",
    storageBucket: "skated8-91010.appspot.com",
    messagingSenderId: "362603619325",
    appId: "1:362603619325:web:c73dc24ea89a76f1c12f94",
    measurementId: "G-4H5RNNQ2ZM"

});

export function auth() {
    return firebase.auth();
}

export default app;