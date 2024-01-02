function menuShow() {
  let menuMobile = document.querySelector(".menu-burguer");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "arquivos/icones/menu_FILL0_wght400_GRAD0_opsz24.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "arquivos/icones/close_FILL0_wght400_GRAD0_opsz24.svg";
  }
}
