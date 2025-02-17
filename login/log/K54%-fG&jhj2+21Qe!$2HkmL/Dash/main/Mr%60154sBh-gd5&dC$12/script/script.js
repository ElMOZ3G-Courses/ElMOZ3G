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

let report1 = document.getElementById('report-1')
let poppup30 = document.getElementById('popup30')
let closere = document.getElementById('close-re')
let btnreport = document.getElementById('report-btn')
let popup99 = document.querySelector('.popup99')
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
let popupcontaner1 = document.querySelector('.contaner-1')
let html = document.querySelector('.popup-html')
let closehtml = document.querySelector('.close-icon')
popupcontaner1.onclick = function(){
    html.style.display = 'block'
}
closehtml.onclick = function(){
    html.style.display = 'none'
}
