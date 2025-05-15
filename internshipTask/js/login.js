document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginBtn").addEventListener("click", function () {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const emailWarn = document.getElementById("emailWarn");
        const passWarn = document.getElementById("passWarn");

        emailWarn.style.display = "none";
        passWarn.style.display = "none";

        let isValid = true;

        if (email === "") {
            emailWarn.style.display = "block";
            isValid = false;
        }

        if (password === "") {
            passWarn.style.display = "block";
            isValid = false;
        }

        if (isValid) {
            window.location.href = "../html/landingpage.html";
        }
    });
});
let link = document.getElementById("navigate");

link.addEventListener("click", navigateto);

function navigateto(e) {

  window.location.href = "../html/signup.html"; 
}

