document.addEventListener("DOMContentLoaded", function () {
    // 🚀 LOGIN PAGE VALIDATION
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let email = document.getElementById("loginEmail").value.trim();
            let password = document.getElementById("loginPassword").value.trim();

            if (email === "" || !validateEmail(email)) {
                alert("Please enter a valid email.");
                return;
            }
            if (password.length < 6) {
                alert("Password must be at least 6 characters.");
                return;
            }

            alert("Login Successful!");
            loginForm.submit();
        });
    }

    // 🚀 REGISTER PAGE VALIDATION
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let name = document.getElementById("registerName").value.trim();
            let email = document.getElementById("registerEmail").value.trim();
            let password = document.getElementById("registerPassword").value.trim();
            let confirmPassword = document.getElementById("registerConfirmPassword").value.trim();

            if (name === "") {
                alert("Name is required.");
                return;
            }
            if (email === "" || !validateEmail(email)) {
                alert("Please enter a valid email.");
                return;
            }
            if (password.length < 6) {
                alert("Password must be at least 6 characters.");
                return;
            }
            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            alert("Registration Successful!");
            registerForm.submit();
        });
    }

    // 🚀 NAVIGATION PAGE VALIDATION
    const navForm = document.getElementById("navForm");
    if (navForm) {
        navForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let searchInput = document.getElementById("navSearch").value.trim();

            if (searchInput === "") {
                alert("Please enter a location or route.");
                return;
            }

            alert("Searching for route...");
            navForm.submit();
        });
    }
});

// ✅ Email Validation Function
function validateEmail(email) {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
