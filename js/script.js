document.addEventListener("DOMContentLoaded", function () {

    const signInModal = document.querySelector(".sign-in");
    const signInButton = document.querySelector(".header__sign-in-btn");
    const closeSignInFormBtn = document.querySelector(".sign-in__close");

    signInButton.onclick = function () {
        signInModal.classList.add('modal_active');
    };
    closeSignInFormBtn.onclick = function () {
        signInModal.classList.remove('modal_active');
    };

    const signUpModal = document.querySelector(".sign-up");
    const signUpButton = document.querySelector(".header__sign-up-btn");
    const closeSignUpFormBtn = document.querySelector(".sign-up__close");

    signUpButton.onclick = function () {
        signUpModal.classList.add('modal_active');
    };
    closeSignUpFormBtn.onclick = function () {
        signUpModal.classList.remove('modal_active');
    };

    const formSignUpButton = document.querySelector(".form__sign-up__btn");

    formSignUpButton.onclick = function () {
        signInModal.classList.remove('modal_active');
        signUpModal.classList.add('modal_active');
    }

    const formSignInButton = document.querySelector(".form__sign-in__btn");

    formSignInButton.onclick = function () {
        signUpModal.classList.remove('modal_active');
        signInModal.classList.add('modal_active');
    }

});