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
        console.log("User   is not logged in.");
    }
});

const uname = document.getElementById('name')
const email = document.getElementById('email')
const vemail = document.getElementById('emailVerified')
const uidd = document.getElementById('uid')

import { getAuth3 } from "firebase/auth";

const auth = getAuth3();
const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
    const displayName = uname.displayName;
    const email = email.email;
    const emailVerified = vemail.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = uidd.uid;
    uname.innerHTML = displayName,
    email.innerHTML = email,
    vemail.innerHTML = emailVerified,
    uidd.innerHTML = uid,


    user.providerData.forEach((profile) => {
    console.log("Sign-in provider: " + profile.emailVerified);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
  });
}