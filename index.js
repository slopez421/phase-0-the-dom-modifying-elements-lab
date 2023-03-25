// Write your code here!

main.remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
const body = document.querySelector("body");
body.appendChild(newHeader);

newHeader.textContent = "Shania is the champion";

