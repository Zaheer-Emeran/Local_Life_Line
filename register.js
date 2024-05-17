// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword } from  "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrYNwxdadbRRsQ56yunmiJ12mOlntliIo",
  authDomain: "hackathon-cb611.firebaseapp.com",
  projectId: "hackathon-cb611",
  storageBucket: "hackathon-cb611.appspot.com",
  messagingSenderId: "345935564886",
  appId: "1:345935564886:web:0b860f8a6864d64a586bf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//Register button
const register = document.getElementById('register');
register.addEventListener("click", function(event){
    event.preventDefault()

    //inputs
const name = document.getElementById('name').value;
const username = document.getElementById('username').value;
const age = document.getElementById('age').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;
const password = document.getElementById('password').value;
const address = document.getElementById('address').value;
const dot_1 = document.getElementById('dot-1').value;
const dot_2 = document.getElementById('dot-2').value;
const dot_3 = document.getElementById('dot-3').value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        //Signed up
        const user = userCredential.user;
        alert("creating account")
        window.location.href ="Login.html"
        //...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        //...
    })
})