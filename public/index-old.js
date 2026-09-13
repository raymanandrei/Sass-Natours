const navigation = document.querySelector(".navigation");
const navLinkList = navigation.querySelector(".navigation__list");
const navigationToggle = navigation.querySelector("#navi-toggle");

navLinkList.addEventListener("click", (e) => {
  if (!e.target.classList.contains("navigation__link")) return;
  navigationToggle.checked = false;
});

const popup = document.querySelector(".popup");
const popupClose = popup.querySelector(".popup__close");

popup.addEventListener("click", (e) => {
  console.log(e.target);
  if (!e.target.classList.contains("popup")) return;
  window.location = "#section-tours";
});
