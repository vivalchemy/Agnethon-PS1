import { checkWithFirebase } from "../firebase/signup.js";

const submitButton = document.querySelector('.login div input[type="submit"]');

function isValidEmail(email) {
  // Regular expression pattern for verifying email format specific to frcrce.ac.in domain
  const emailRegex = /^[a-zA-Z0-9._]{4,}@frcrce\.ac\.in$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  // Regular expression pattern for verifying email format specific to frcrce.ac.in domain
  const passwordRegex = /^.{4,}$/;
  return passwordRegex.test(password);
}

submitButton.addEventListener("click", async function (event) {
  event.preventDefault();
  const email = document.getElementById("login__username").value;
  const password = document.getElementById("login__password").value;
  if (!isValidEmail(email) || !isValidPassword(password)) {
    console.log("Not a valid email or password");
    return;
  }
  let type = await checkWithFirebase(email, password);
  if (type === "student") {
    console.log("Logged in as student");
  } else if (type === "faculty") {
    console.log("Logged in as faculty");
    window.location.href = "faculty.html";
  } else if (type === "principal") {
    console.log("Logged in as principal");
  } else {
    console.log("Couldn't log in in it");
  }
});

