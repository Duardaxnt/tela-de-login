document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const message = document.getElementById("message");

    let isValid = true;

    // Reset errors
    emailError.textContent = "";
    passwordError.textContent = "";
    message.textContent = "";
    emailError.classList.remove("show");
    passwordError.classList.remove("show");
    message.classList.remove("show");

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "E-mail inválido.";
        emailError.classList.add("show");
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        passwordError.textContent = "A senha deve ter pelo menos 6 caracteres.";
        passwordError.classList.add("show");
        isValid = false;
    }

    // Display message
    if (isValid) {
        message.textContent = "Login realizado com sucesso!";
        message.style.color = "green";
        message.classList.add("show");
    } else {
        message.textContent = "Por favor, corrija os erros acima.";
        message.style.color = "red";
        message.classList.add("show");
    }
});