import firebase from "firebase";

// no need to import SDK from URL, it's in npm
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
apiKey: "AIzaSyBnJdAvDTN3yits6jRaYpoaKE2AUOMP4Wo",
authDomain: "marine-clarity-302622.firebaseapp.com",
projectId: "marine-clarity-302622",
storageBucket: "marine-clarity-302622.appspot.com",
messagingSenderId: "779570979114",
appId: "1:779570979114:web:cbf09e1f764a7001c03e53",
measurementId: "G-S1MHR7N5DC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
