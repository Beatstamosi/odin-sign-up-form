// get password inputs
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const messageSpan = document.querySelector("#password-check");

function checkPassword() {
    if (password.value === confirmPassword.value) {
        messageSpan.classList.remove("password-error");
        password.style.borderColor = "green";
        confirmPassword.style.borderColor = "green";
    } else {
        messageSpan.classList.add("password-error");
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
    }
}

function resetErrorMessage() {
    if (password.value === "" && confirmPassword.value === "") {
        messageSpan.classList.remove("password-error");
    } else {
        checkPassword();
    }
}


confirmPassword.addEventListener("input", checkPassword);
password.addEventListener("input", resetErrorMessage);