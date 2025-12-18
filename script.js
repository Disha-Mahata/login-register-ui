// LOGIN VALIDATION
function loginValidate() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        alert("All fields are required");
        return false;
    }

    alert("Login Successful!");
    return true;
}

// REGISTER VALIDATION
function registerValidate() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("All fields are required");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    alert("Registration Successful!");
    return true;
}

// SHOW / HIDE PASSWORD
function togglePassword(id) {
    let field = document.getElementById(id);
    field.type = field.type === "password" ? "text" : "password";
}

// DUMMY AJAX EMAIL CHECK
function checkEmail() {
    let email = document.getElementById("email").value;
    let msg = document.getElementById("emailMsg");

    if (email === "") return;

// Dummy logic
    if (email === "test@gmail.com") {
        msg.innerHTML = "Email already exists";
        msg.style.color = "red";
    } else {
        msg.innerHTML = "Email available";
        msg.style.color = "green";
    }
}

