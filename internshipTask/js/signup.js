document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("signupBtn").addEventListener("click", function () {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    const emailWarn = document.getElementById("emailWarn");
    const passWarn = document.getElementById("passWarn");
    const confirmWarn = document.getElementById("confirmWarn");

    emailWarn.style.display = "none";
    passWarn.style.display = "none";
    confirmWarn.style.display = "none";

    let isValid = true;

    if (email === "") {
      emailWarn.style.display = "block";
      isValid = false;
    }

    if (password === "") {
      passWarn.style.display = "block";
      isValid = false;
    }

    if (confirmPassword === "" || confirmPassword !== password) {
      confirmWarn.style.display = "block";
      isValid = false;
    }

    if (isValid) {
      window.location.href = "../html/landingpage.html";
    }
  });
});
