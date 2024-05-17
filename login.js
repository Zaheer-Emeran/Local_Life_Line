// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from  "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

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

// Login button
const loginButton = document.getElementById('login');
loginButton.addEventListener("click", function(event){
    event.preventDefault();

    // Inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Sign in successful
            const user = userCredential.user;
            alert("Logged in successfully!");
            window.location.href = "dashboard.html"
        })
        .catch((error) => {
            // Handle errors
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

