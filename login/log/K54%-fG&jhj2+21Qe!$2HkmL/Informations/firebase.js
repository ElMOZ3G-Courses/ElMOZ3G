import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
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
const auth = getAuth(app);
const db = getDatabase(app);

const register = document.getElementById('signup');
const login1 = document.getElementById('login1');

register.onclick = function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // Save user data to the database
            set(ref(db, 'users/' + user.uid), {
                email: email,
                password: password,
                createdAt: new Date().toISOString()
            })
            .then(() => {
                alert("User  registered and data saved successfully!");
                window.location.href = "Dash/main/Mr%2560154sBh-gd5&dC$12/dashbord.html";
            })
            .catch((error) => {
                alert("Error saving user data: " + error.message);
            });
        })
        .catch((error) => {
            alert("Registration error: " + error.message);
        });
};

login1.onclick = function(event2){
    event2.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        window.location.href = "Dash/main/Mr%2560154sBh-gd5&dC$12/dashbord.html"; // Simplified URL
    })
    .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
    });
}
