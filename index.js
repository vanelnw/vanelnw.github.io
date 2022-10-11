const close = document.querySelector(".close-menu");
const menulist = document.getElementById("myLinks");
const burgerMenu = document.getElementById("mobile-menu");
const logo = document.querySelector(".logo");

function myFunction() {
    
    if (menulist.style.display === "block") {
        menulist.style.display = "none";
        menulist.classList.remove('menu-list-show');
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
