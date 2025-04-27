const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // mobile Menu Visibility
  document.body.classList.toggle("show-mobile-menu");
});

// close button
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

    