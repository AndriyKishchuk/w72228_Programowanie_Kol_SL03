function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    return passwordRegex.test(password);
}

function validateCountry(country) {
    return country !== "";
}

document.getElementById("rejestracja").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("emailError").textContent = "";
    document.getElementById("hasloError").textContent = "";
    document.getElementById("krajError").textContent = "";

    const email = document.getElementById("email").value.trim();
    const haslo = document.getElementById("haslo").value;
    const kraj = document.getElementById("kraj").value;

    let poprawny = true;

    if (!validateEmail(email)) {
        document.getElementById("emailError").textContent = "Niepoprawny adres email.";
        poprawny = false;
    }

    if (!validatePassword(haslo)) {
        document.getElementById("hasloError").textContent = "Hasło musi mieć min. 8 znaków, 1 cyfrę i 1 znak specjalny.";
        poprawny = false;
    }

    if (!validateCountry(kraj)) {
        document.getElementById("krajError").textContent = "Wybór kraju jest wymagany.";
        poprawny = false;
    }

    if (poprawny) {
        alert("Rejestracja zakończona sukcesem!");
        document.getElementById("rejestracja").reset();
    }
});
