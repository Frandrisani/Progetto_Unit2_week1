const navbar = function () {
  const nav = document.querySelector("nav");
  const button = document.getElementById("primoBottone");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

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

// const aside = function () {
//   const aside = document.getElementsByTagName("aside")[0];

//   window.addEventListener("scroll", function () {
//     const scrollPosition = window.scrollY;

//     if (scrollPosition > 400) {
//       aside.classList.add("asideFissa");
//     } else {
//       aside.classList.remove("asideFissa");
//     }
//   });
// };
// aside();
