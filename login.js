document.addEventListener(
    "DOMContentLoaded",
    function () {

        // If already logged in,
        // go straight to dashboard

        if (RiskIQStorage.isLoggedIn()) {

            window.location.href = "index.html";
            return;
        }


        const loginForm =
            document.getElementById("loginForm");

        const usernameInput =
            document.getElementById("username");

        const passwordInput =
            document.getElementById("password");

        const loginError =
            document.getElementById("loginError");

        const showPassword =
            document.getElementById("showPassword");


        // ================= SHOW PASSWORD =================

        showPassword.addEventListener(
            "click",
            function () {

                if (
                    passwordInput.type === "password"
                ) {

                    passwordInput.type = "text";

                    showPassword.innerHTML =
                        '<i class="fa-solid fa-eye-slash"></i>';

                } else {

                    passwordInput.type = "password";

                    showPassword.innerHTML =
                        '<i class="fa-solid fa-eye"></i>';
                }

            }
        );


        // ================= LOGIN =================

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                // Hide previous error

                loginError.classList.remove("show");


                const username =
                    usernameInput.value.trim();

                const password =
                    passwordInput.value.trim();


                // Check empty fields

                if (!username || !password) {

                    loginError.querySelector("span").textContent =
                        "Please enter your username and password.";

                    loginError.classList.add("show");

                    return;
                }


                // Check login

                const result =
                    RiskIQStorage.login(
                        username,
                        password
                    );


                // Successful login

                if (result.success) {

                    window.location.href =
                        "index.html";

                } else {

                    loginError.querySelector("span").textContent =
                        "Incorrect username or password.";

                    loginError.classList.add("show");

                    passwordInput.value = "";

                    passwordInput.focus();
                }

            }
        );

    }
);
