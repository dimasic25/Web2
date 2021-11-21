document.addEventListener("DOMContentLoaded", function () {

    const signInWrapper = document.querySelector(".sign-in__wrapper");
    const signInButton = document.querySelector(".header__sign-in-btn");
    const closeSignInFormBtn = document.querySelector(".sign-in__close");

    signInButton.onclick = () => signInWrapper.style.display = "block";
    closeSignInFormBtn.onclick = () => signInWrapper.style.display = "none";

    const signUpWrapper = document.querySelector(".sign-up__wrapper");
    const signUpButton = document.querySelector(".header__sign-up-btn");
    const closeSignUpFormBtn = document.querySelector(".sign-up__close");

    signUpButton.onclick = () => signUpWrapper.style.display = "block";
    closeSignUpFormBtn.onclick = () => signUpWrapper.style.display = "none";
})