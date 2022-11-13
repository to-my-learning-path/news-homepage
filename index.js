var toggleButton = document.querySelector(".toggle-button");
var nav = document.querySelector(".main-nav");

toggleButton.addEventListener("click", () => {
  var currentVisiblity = nav.getAttribute("data-visible");
  if (currentVisiblity === "false") {
    nav.setAttribute("data-visible", true);
    toggleButton.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    toggleButton.setAttribute("aria-expanded", false);
  }
});
