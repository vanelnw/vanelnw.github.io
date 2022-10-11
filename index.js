const close = document.querySelector(".close-menu");
var menulist = document.getElementById("myLinks");
var burgerMenu = document.getElementById("mobile-menu");
var logo = document.querySelector(".logo");

function myFunction() {
    
    if (menulist.style.display === "block") {
        menulist.style.display = "none";
    } else {
      menulist.style.display = "block";
      burgerMenu.style.display = "none";
      logo.style.display = "none";
      menulist.classList.add('menu-list-show');
    }
  }
  
close.addEventListener("click", () => {
    menulist.style.display = "none";
    burgerMenu.style.display = "block";
    logo.style.display = "block";
    menulist.classList.remove('menu-list-show');
});
