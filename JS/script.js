document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".bar");
  const menu2 = document.querySelector(".bar2");
  const menuList = document.querySelector("nav ul");
   const popUp = document.querySelector(".pop-container");
  function showMenu() {
    menuList.classList.add("showmenu");
    menu2.style.display = "block";
    menu.style.display = "none";
  }
  function hideMenu() {
    menuList.classList.remove("showmenu");
    menu.style.display = "block";
    menu2.style.display = "none";
  }
  function hidePopUp(){
    popUp.style.display="none"
  }
  menu.addEventListener("click", () => {
    showMenu();
    hidePopUp();
  });

  menu2.addEventListener("click", () => {
    hideMenu();
    hidePopUp()
  });
  menuList.addEventListener("click", (event) => {
    // Check if the clicked element is a navbar link (anchor tag)
    if (
      event.target.tagName === "A" &&
      event.target.classList.contains("nav-link")
    ) {
      hideMenu();
    }
  });

  // Check window width on resize
  window.addEventListener("resize", () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 900) {
      menu.style.display = "none";
      menu2.style.display = "none";
    } else {
      if (menuList.classList.contains("showmenu")) {
        menu2.style.display = "block";
        menu.style.display = "none";
        
      } else {
       
        menu.style.display = "block";
        menu2.style.display = "none";
      }
    }
  });
});

function scrollHeader() {
  const header = document.querySelector(".nav-bar");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (window.scrollY >= 100) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

// Add an event listener to call the scrollHeader function when the page is scrolled
window.addEventListener("scroll", scrollHeader);

window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector(".pop-container").style.display = "block";
  }, 2); // Adjusted the delay to 500 milliseconds
});

document.querySelector("#cls-pop").addEventListener("click", function () {
  document.querySelector(".pop-container").style.display = "none";
});
