let lastScrollTop; // This Varibale will store the top position

let navbar = document.getElementById('navbar'); // Get The NavBar
let menu = document.getElementById("menu");

window.addEventListener('scroll',function(){
 //on every scroll this funtion will be called
  
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //This line will get the location on scroll
  
  if(scrollTop > lastScrollTop){ //if it will be greater than the previous
    navbar.style.top='-10vh';
    //set the value to the negetive of height of navbar ù
    menu.style.left="1vh"
  }
  else{
    navbar.style.top='0';
    menu.style.left="-10vh"
  }
  lastScrollTop = scrollTop; //New Position Stored
});

function ShowNav(){
  navbar.style.top='0';
  menu.style.left="-10vh"
}

function HideNav(){
  navbar.style.top='-10vh';
  menu.style.left="1vh"
}

let w1 = document.getElementById("w1")
let w2 = document.getElementById("w2")
let w3 = document.getElementById("w3")

function W1(){
  w1.style.left = "0"
}
function W2(){
  w2.style.left = "0"
}
function W3(){
  w3.style.left = "0"
}

function W1m(){
  w1.style.left = "-100vw"
}
function W2m(){
  w2.style.left = "-100vw"
}
function W3m(){
  w3.style.left = "-100vw"
}

let space = document.getElementById("space");
let P = document.getElementById("P");
let C = document.getElementById("C");
let p = document.getElementById("p");
let c = document.getElementById("c");

function Pro(){
  space.style.height="20%"
  P.style.left="0"
  C.style.right="-65vw"
  p.style.color="var(--text)"
  c.style.color="var(--biancastro)"
}
function Con(){
  space.style.height="20%"
  P.style.left="-65vw"
  C.style.right="0vw"
  c.style.color="var(--text)"
  p.style.color="var(--biancastro)"
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
