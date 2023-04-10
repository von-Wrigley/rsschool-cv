 const hamburger = document.querySelector(".burger-menu");  
 const navsub = document.querySelector(".bg-nav");  
 hamburger.addEventListener('click', () => {  
  hamburger.classList.toggle("change")  
  navsub.classList.toggle("nav-change")  
 });  
