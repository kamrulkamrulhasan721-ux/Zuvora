import { auth } from "./firebase-config.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");

document.getElementById("signupBtn").addEventListener("click", () => {

  createUserWithEmailAndPassword(
    auth,
    email.value,
    password.value
  )
  .then(() => {
    alert("Account Created Successfully!");
  })
  .catch((error) => {
    alert(error.message);
  });

});

document.getElementById("loginBtn").addEventListener("click", () => {
alert("LOGIN CLICKED");
  signInWithEmailAndPassword(
    auth,
    email.value,
    password.value
  )
  .then(() => {
 localStorage.setItem("loggedIn", "true");
    alert("Login Successful!");
    window.location.href = "index.html";
  })
  .catch((error) => {
    alert(error.message);
  });

});