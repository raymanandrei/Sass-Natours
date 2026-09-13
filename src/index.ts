const navigationContainer = document.querySelector<HTMLElement>(".navigation");

const navLinkList =
  navigationContainer?.querySelector<HTMLElement>(".navigation__list");

const navigationToggle =
  navigationContainer?.querySelector<HTMLInputElement>("#navi-toggle");

navLinkList?.addEventListener("click", (e: MouseEvent): void => {
  const target = e.target as HTMLElement | null;

  if (!target?.classList.contains("navigation__link")) return;
  if (navigationToggle) navigationToggle.checked = false;
});

const popup = document.querySelector<HTMLElement>(".popup");

popup?.addEventListener("click", (e: MouseEvent): void => {
  const target = e.target as HTMLElement | null;

  if (!target?.classList.contains("popup")) return;
  window.location.hash = "#section-tours";
});
