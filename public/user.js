
class User {
    constructor(firstName, lastName, email, username, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password;
    }
}

// Registration form
let registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", register);
}

function register(e) {
    e.preventDefault();

    let firstName = document.getElementById("First").value;
    let lastName = document.getElementById("Last").value;
    let email = document.getElementById("Email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("psw").value;

    let user = new User(firstName, lastName, email, username, password);

    console.log(user);
}

// Login form
let loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", login);
}

function login(e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let loginUser = {
        username: username,
        password: password
    };

    console.log(loginUser);
}
