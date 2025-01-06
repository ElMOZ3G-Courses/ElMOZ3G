import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
const firebaseConfig = {
  apiKey: "AIzaSyBLUTgSq6AOMV4zjT68MqZixxCtpLTpzrs",
  authDomain: "uplaod-web.firebaseapp.com",
  databaseURL: "https://uplaod-web-default-rtdb.firebaseio.com",
  projectId: "uplaod-web",
  storageBucket: "uplaod-web.appspot.com",
  messagingSenderId: "458250812436",
  appId: "1:458250812436:web:340df3066a4753d3f17b01",
  measurementId: "G-35BEH0W9NS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const login1 = document.getElementById('login1').value;
const register = document.getElementById('signup').value;

register.addEventListener("click", function(event){
    event.preventDefault()

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert('creating account..')
        window.location.href = "login/log/K54%25-fG&jhj2+21Qe!$2HkmL/Dash/main/Mr%2560154sBh-gd5&dC$12/dashbord.html"
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
});

import { getAuth2, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";

login1.addEventListener("click", function(event2){
    event2.preventDefault()

    const auth2 = getAuth2();
    signInWithEmailAndPassword(auth2, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert('loading...')
        window.location.href = "login/log/K54%25-fG&jhj2+21Qe!$2HkmL/Dash/main/Mr%2560154sBh-gd5&dC$12/dashbord.html"
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
});