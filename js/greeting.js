const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const listForm = document.getElementById("list-form");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings () {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    listForm.classList.remove(HIDDEN_CLASSNAME);
};

function onLoginSubmit(event) {
    event.preventDefault();
    
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    
    greeting.innerText = `Hello, ${username}!`;
    paintGreetings();
}

loginForm.addEventListener("submit", onLoginSubmit);

if(localStorage.getItem(USERNAME_KEY)) {
    greeting.innerText = `Hello, ${localStorage[USERNAME_KEY]}!`;
    paintGreetings();
}