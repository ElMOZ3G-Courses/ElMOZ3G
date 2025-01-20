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
const contaner = document.querySelector('.contaner')
contaner.scrollIntoView()
const signup1 = document.getElementById('signup')
const popup55 = document.querySelector('.popup')
const exit = document.querySelector('.close')


signup1.onclick = function() {
    popup55.style.display = 'block'
}

exit.onclick = function(){
    popup55.style.display = 'none'
}
import { getAuth } from "firebase/auth";

