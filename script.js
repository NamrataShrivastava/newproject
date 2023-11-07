document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // You can add your authentication logic here
        // For a simple example, you can check if the username and password are correct
        if (username === "your_username" && password === "your_password") {
            alert("Login successful!");
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
