const submitButton = document.querySelector('.login div input[type="submit"]');

function isValidEmail(email) {
  // Regular expression pattern for verifying email format specific to frcrce.ac.in domain
  const emailRegex = /^[a-zA-Z0-9._]{4,}@frcrce\.ac\.in$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  // Regular expression pattern for verifying email format specific to frcrce.ac.in domain
  const passwordRegex = /^[0-9]{4}$/;
  return passwordRegex.test(password);
}

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.getElementById("login__username").value;
  const password = document.getElementById("login__password").value;
  if (!isValidEmail(email) || !isValidPassword(password)) {
    console.log("Not a valid email or password");
    return;
  }
  const validEmail = email;
  const validPassword = password;

  console.log("Email:", validEmail);
  console.log("Password:", validPassword);
});
