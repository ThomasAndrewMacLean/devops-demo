import firebase from 'firebase/app';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyD3JS3Xc-EZJqRViR9rE4jwDjy0GL1gtrQ",
    authDomain: "healthbuddy-cfc4a.firebaseapp.com",
    databaseURL: "https://healthbuddy-cfc4a.firebaseio.com",
    projectId: "healthbuddy-cfc4a",
    storageBucket: "healthbuddy-cfc4a.appspot.com",
    messagingSenderId: "817054838254",
    appId: "1:817054838254:web:6f1f056f2d548c5afe32ff",
    measurementId: "G-XV9TL1PJZM"
};
if (!firebase.apps.length) {
firebase.initializeApp(config);
}
const auth = firebase.auth();
export {
 auth,
 firebase
};