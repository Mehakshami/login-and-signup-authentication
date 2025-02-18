// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4pme-XRhIROHgLHZe7agfX8hP1iRRU48",
  authDomain: "authentication-8df01.firebaseapp.com",
  projectId: "authentication-8df01",
  storageBucket: "authentication-8df01.firebasestorage.app",
  messagingSenderId: "806028098792",
  appId: "1:806028098792:web:f6104e80f4ad1624be9d5d",
  measurementId: "G-7XE0NS5VHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let button = document.getElementById("login");
button.addEventListener('click', function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Login successful");
            window.location.href = "success.html";  // Redirect to success page
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);  // Display error message
        });
});