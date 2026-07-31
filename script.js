function welcomeMessage() {
    alert(
    "Welcome to St. Luke's Inkisanjani School! Thank you for visiting our website."
    );
}
const logo = document.querySelector(".logo");

logo.addEventListener("mouseover", () => {
    logo.style.transform = "scale(1.1)";
    logo.style.transition = "0.3s";
});

logo.addEventListener("mouseout", () => {
    logo.style.transform = "scale(1)";
});

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();

alert(
"Thank you for contacting St. Luke's Inkisanjani School. We will get back to you soon."
);

this.reset();

});

document.getElementById("year").textContent =
new Date().getFullYear();

window.onload = function(){

setTimeout(function(){

alert(
"Welcome to St. Luke's Inkisanjani School Website."
);

},1000);

};