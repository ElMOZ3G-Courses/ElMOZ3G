import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

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
const db = getDatabase(app);

const uname = document.getElementById('name')
const email = document.getElementById('email')
const vemail = document.getElementById('emailVerified')
const uidd = document.getElementById('uid')

// Check if the user is logged in
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const userId = user.uid;

        // Fetch user data from the database
        firebase.database().ref('users/' + userId).once('value')
            .then((snapshot) => {
                const userData = snapshot.val();

                // Display the username in the <span> element
                const usernameSpan = document.getElementById('username');
                usernameSpan.textContent = userData.username; // Update the span with the username
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    } else {
        console.log("User  is not logged in.");
    }
});

import { getAuth3 } from "firebase/auth";

const auth = getAuth3();
const user = auth.currentUser;
// Check if the user is logged in
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const userId = user.uid;

        // Fetch user data from the database
        firebase.database().ref('users/' + userId).once('value')
            .then((snapshot) => {
                const userData = snapshot.val();

                // Display the username in the <span> element
                const usernameSpan = document.getElementById('username');
                usernameSpan.textContent = userData.username; // Update the span with the username
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    } else {
        console.log("User    is not logged in.");
    }
});

let report1 = document.getElementById('report-1').value
let poppup30 = document.getElementById('popup30').value
let closere = document.getElementById('close-re').value
let btnreport = document.getElementById('report-btn').value
let popup99 = document.querySelector('.popup99').value
report1.onclick = function(){
    poppup30.style.display = 'block'
}
closere.onclick = function(){
    poppup30.style.display = 'none'
}
btnreport.onclick = function(){
    poppup30.style.display = 'none'
    popup99.style.display = 'block'
    setTimeout(function(){
        popup99.style.display = 'none'
    },3500)
}
const popht = document.querySelector('.popup-html')

document.querySelector('.contaner-1').onclick = function(){

    popht.style.display = 'block'
}
document.querySelector('.close-icon').onclick = function(){
    popht.style.display = 'none'
}
const uname33 = document.getElementById('username').value
const homename = document.querySelector('.home-top')
homename.innerHTML = uname33;


if (user !== null) {
  user.providerData.forEach((profile) => {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}

