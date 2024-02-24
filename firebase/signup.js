import { db } from "./config.js";
import {
  getDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
// const submitButton = document.querySelector('.login div input[type="submit"]');
// function isValidEmail(email) {
//   // Regular expression pattern for verifying email format specific to frcrce.ac.in domain
//   const emailRegex = /^[a-zA-Z0-9._]{4,}@frcrce\.ac\.in$/;
//   return emailRegex.test(email);
// }
//
// function isValidPassword(password) {
//   // Regular expression pattern for verifying email format specific to frcrce.ac.in domain
//   const passwordRegex = /^[0-9]{4}$/;
//   return passwordRegex.test(password);
// }

// submitButton.addEventListener("click", async function (event) {
//   event.preventDefault();
//   const email = document.getElementById("login__username").value;
//   const password = document.getElementById("login__password").value;
//   if (!isValidEmail(email) || !isValidPassword(password)) {
//     console.log("Not a valid email or password");
//     return;
//   }
//   // console.log("Email:", email);
//   // console.log("Password:", password);
//   // window.location.href = "faculty.html";
//   let type = await checkWithFirebase(email, password);
//   if (type === "student") {
//     console.log("Logged in as student");
//   } else if (type === "faculty") {
//     console.log("Logged in as faculty");
//   } else if (type === "principal") {
//     console.log("Logged in as principal");
//   } else {
//     console.log("Couldn't log in in it");
//   }
// });
//
export async function checkWithFirebase(email, password) {
  console.log("Email:", email);
  console.log("Password:", password);

  try {
    // Check if the user exists in the database
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      const storedPassword = userData.password;
      const userType = userData.type;

      // Check if the password matches
      if (password === storedPassword) {
        console.log("Login successful");
        console.log("User type:", userType);
        return userType;
        // Redirect or perform further actions here
      } else {
        console.log("Incorrect password");
      }
    } else {
      console.log("User does not exist");
    }
  } catch (error) {
    console.error("Error with the firebase server", error);
  }
  return "";
}
