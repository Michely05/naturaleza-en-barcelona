/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

// +( function() {
//   const university = "UOC";
//   console.log(`Hello, ${university}!`);
// } )();

document
  .querySelectorAll(".navbar__link, .navbar__dropdown-link")
  .forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

document
  .getElementById("discover-button")
  .addEventListener("click", function () {
    const section = document.getElementById("collserola");
    section.scrollIntoView({ behavior: "smooth" });
  });

AOS.init({
  duration: 1200,
  once: true,
});
