//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDtPH1MooktCNzCP8x1cuh5t3HmZOY0EcA",
    authDomain: "comp1800-202230-fd127.firebaseapp.com",
    projectId: "comp1800-202230-fd127",
    storageBucket: "comp1800-202230-fd127.appspot.com",
    messagingSenderId: "222906377832",
    appId: "1:222906377832:web:84f8316683fe9cf2b6fddd"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();