const body = document.querySelector("body");

const images = ["0.jpg", "1.jpg", "2.png", "3.jpg", "4.jpg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `/img/${chosenImages}`;

document.body.appendChild(bgImage);

