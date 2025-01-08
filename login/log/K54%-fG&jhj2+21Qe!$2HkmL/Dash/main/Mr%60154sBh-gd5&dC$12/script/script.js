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

auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        const userId = user.uid;

        // Fetch user data from the database
        firebase.database().ref('users/' + userId).once('value')
            .then((snapshot) => {
                const userData = snapshot.val();

                // Display user data in the profile section
                const profileSection = document.querySelector('.user-profile');
                profileSection.innerHTML = `
                    <span>${userData.username}</span>
                    <img src="https://via.placeholder.com/40" alt="User   Profile">
                `;
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    } else {
        // User is signed out
        console.log("User  is not logged in.");
    }
});