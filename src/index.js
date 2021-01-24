import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase";
import reportWebVitals from './reportWebVitals';


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


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
