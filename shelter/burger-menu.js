
var burgerMenu = document.getElementById('burger');
var overlay = document.getElementById('burger-menu');

burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");

});


var secondslide = document.getElementById('wrapper-firstslide2');
var header = document.getElementById('header');
var body = document.getElementsByTagName('body')[0]
burgerMenu.onclick = function() {
    body.classList.toggle("dark");
    secondslide.classList.toggle("background");
    header.classList.toggle("background");
};

secondslide.onclick = function() {
    overlay.classList.toggle("hide");
    this.classList.toggle("light");
    burgerMenu.classList.toggle("open");
}; 
