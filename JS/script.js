document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".bar");
  const menu2 = document.querySelector(".bar2");
  const menuList = document.querySelector("nav ul");
  const popUp = document.querySelector(".pop-container");

  // Function to show the menu
  function showMenu() {
    menuList.classList.add("showmenu");
    menu2.style.display = "block";
    menu.style.display = "none";
  }

  // Function to hide the menu
  function hideMenu() {
    menuList.classList.remove("showmenu");
    menu.style.display = "block";
    menu2.style.display = "none";
  }

  // Function to hide the pop-up
  function hidePopUp() {
    popUp.style.display = "none";
    // Set a flag in localStorage indicating that the pop-up has been closed
    localStorage.setItem("popUpClosed", "true");
  }

  // Check if the pop-up should be shown on page load
  if (localStorage.getItem("popUpClosed") !== "true") {
    popUp.style.display = "block";
  }

  // Event listener for the menu click
  menu.addEventListener("click", () => {
    showMenu();
    hidePopUp();
  });

  // Event listener for the menu2 click
  menu2.addEventListener("click", () => {
    hideMenu();
    hidePopUp();
  });

  // Event listener for the menuList click
  menuList.addEventListener("click", (event) => {
    if (
      event.target.tagName === "A" &&
      event.target.classList.contains("nav-link")
    ) {
      hideMenu();
    }
  });

  // Function to adjust the menu display based on window width
  function adjustMenuDisplay() {
    const windowWidth = window.innerWidth;

    if (windowWidth > 1070) {
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
  }

  // Call the function on page load
  adjustMenuDisplay();

  // Attach the function to the resize event
  window.addEventListener("resize", adjustMenuDisplay);

  // Function to handle header scroll
  function scrollHeader() {
    const header = document.querySelector(".nav-bar");
    if (window.scrollY >= 100) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  }

  // Event listener for scroll
  window.addEventListener("scroll", scrollHeader);

  // Event listener to show pop-up after a delay on page load
  window.addEventListener("load", function () {
    setTimeout(function open(event) {
      // Check if the pop-up should be shown
      if (localStorage.getItem("popUpClosed") !== "true") {
        popUp.style.display = "block";
      }
    }, 500); // Adjusted the delay to 500 milliseconds
  });

  // Event listener to close the pop-up when the close button is clicked
  document.querySelector("#cls-pop").addEventListener("click", function () {
    hidePopUp();
  });
});
