// Login function
function login() {
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;

  if (email === "" || password === "") {
    alert("Please enter both email and password.");
    return;
  }
  
  alert("Login Successful!");
  // Redirect to home page after login (change home.html to your page)
  window.location.href = "home.html";
}

// Signup function
function signup() {
  let name = document.getElementById("signup-name").value;
  let email = document.getElementById("signup-email").value;
  let password = document.getElementById("signup-password").value;
  let confirm = document.getElementById("signup-confirm").value;

  if (name === "" || email === "" || password === "" || confirm === "") {
    alert("All fields are required.");
    return;
  }

  if (password !== confirm) {
    alert("Passwords do not match.");
    return;
  }

  alert("Signup Successful!");
  // Redirect to login page after signup
  window.location.href = "login.html";
}
