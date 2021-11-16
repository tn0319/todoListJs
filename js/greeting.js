const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings () {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
};

function onLoginSubmit(event) {
    event.preventDefault();
    
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    
    greeting.innerText = `Hello ${username}`;
    paintGreetings();
}

loginForm.addEventListener("submit", onLoginSubmit);

if(localStorage.getItem(USERNAME_KEY)) {
    paintGreetings();
}