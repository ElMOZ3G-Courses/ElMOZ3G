// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import{getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"
import{getRealtime, setDoc, doc} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-Fiirestore.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

let signup = document.getElementById('signup')

signup.onclick = function(event){
    event.preventDefault()
    let email = document.getElementById('email').Value;
    let password = document.getElementById('password').value;
    let login = document.getElementById('login').value;

    let auth = getAuth();
    let db = getRealtime();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        const userData = {
            email: email,
            password: password,
        }
        const docRef = doc(db, "users", user.uid);
        setDoc(docRef, userData)
        .then(() => {
            console.log("user created")
        })
        .catch((error) => {
            console.log(error)
        })
    })
    .catch((error) => {
        const erorrCode = erorr.code;
        if(erorrCode == "auth/email-already-in-use"){
            alert("Email already in use")
        }
        else{
            alert("uneble")
        }
    })
}