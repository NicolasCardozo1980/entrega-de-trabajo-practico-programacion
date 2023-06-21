function activateNavbar() {
    let navbar = document.querySelector(".snpabar");
    let navbarLinks = document.querySelectorAll(".snpabar a");
  
    navbarLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navbarLinks.forEach((link) => {
          link.classList.remove("active");
        });
        link.classList.add("active");
      });
    });
  }
  
  activateNavbar();
  function snpabar() {
    let snpabar = document.querySelector(".snpabar");
    let snpabarLinks = document.querySelectorAll(".snpabar a");
  
    snpabarLinks.forEach((link) => {
      link.addEventListener("click", () => {
        snpabarLinks.forEach((link) => {
          link.classList.remove("active");
        });
        link.classList.add("active");
      });
    });
  }
  
  snpabar();
   