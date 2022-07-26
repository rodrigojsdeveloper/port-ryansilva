const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

const service = doc.querySelector(".option-menu-service");
const project = doc.querySelector(".option-menu-project");
const about = doc.querySelector(".option-menu-about");
const contact = doc.querySelector(".option-menu-contact");

service.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
project.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
about.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
contact.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});