const form = document.getElementById("registerForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const rePasswordInput = document.getElementById("rePassword");

form.addEventListener("submit", function(event){

    event.preventDefault(); 

    const email = emailInput.value;
    const password = passwordInput.value;
    const rePassword = rePasswordInput.value;

    const user = {
        email: email,
        password: password,
        rePassword: rePassword
    };

    
    console.log(user);
});