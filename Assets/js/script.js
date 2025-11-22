function toggleMenu() {
  const navMenu = document.querySelector('.nav-menu');
  const hamburger = document.querySelector('.hamburger');
  const overlay = document.querySelector('.overlay');
  const home = document.querySelector('.home');

  navMenu.classList.toggle('active');
  overlay.classList.toggle('active');

  if (navMenu.classList.contains('active')) {
    hamburger.style.display = "none";
  } else {
    hamburger.style.display = "flex";
  }
}

// TẠO MENU CON CLICK TRÊN MOBILE
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  if (window.innerWidth <= 768) {
    dropdowns.forEach(drop => {
      const link = drop.querySelector("a");
      const submenu = drop.querySelector(".dropdown-menu");

      link.addEventListener("click", function (e) {
        if (submenu && submenu.children.length > 0) {
          e.preventDefault(); // chỉ chặn khi có menu con
          drop.classList.toggle("open");
        }
      });
    });
  }

});

