const navbar = function () {
  const nav = document.querySelector("nav");
  const button = document.getElementById("primoBottone");

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    if (scrollPosition < 300) {
      nav.classList.add("navcolorye");
      button.classList.add("getStarted");
      nav.classList.remove("navcolorwh");
      button.classList.remove("scroll");
    } else {
      nav.classList.remove("navcolorye");
      button.classList.remove("getStarted");
      nav.classList.add("navcolorwh");
      button.classList.add("scroll");
    }
  });
};

navbar();
