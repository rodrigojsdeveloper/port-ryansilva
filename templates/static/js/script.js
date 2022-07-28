window.sr = ScrollReveal();
sr.reveal('.contents');
sr.reveal('.container-main');
sr.reveal('.container-about');
sr.reveal('.container-skills');
sr.reveal('.container-qualifications');
sr.reveal('.text-Introduction');
sr.reveal('.Introduction img');

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

let btnH = document.getElementById("buttonHard");
let divH = document.getElementById("hard");
let iconH = document.getElementById("icon-hard");
let btnS = document.getElementById("buttonSoft");
let divS = document.getElementById("soft");
let iconS = document.getElementById("icon-soft");

btnH.addEventListener("click", () => {
  if (divH.clientHeight === 0) {
    iconH.classList.add("icon_open");
    iconH.classList.remove("icon_close");

    divH.classList.remove("hide-content");

  } else {
    iconH.classList.add("icon_close");
    iconH.classList.remove("icon_open");
    divH.classList.add("hide-content");
  }
});

btnS.addEventListener("click", () => {
  if (divS.clientHeight === 0) {
    iconS.classList.add("icon_open");
    iconS.classList.remove("icon_close");
      divS.classList.remove("hide-content")

  } else {
    iconS.classList.add("icon_close");
    iconS.classList.remove("icon_open");

    divS.classList.add("hide-content")

  }
});
let education = document.getElementById("education");
let work = document.getElementById("work");
let educationheader = document.getElementById("educationheader");
let workheader = document.getElementById("workheader");
// workheader.style.color = "var(--color-blue)";

educationheader.addEventListener("click", () => {
    if (education.style.display === "none") {
        education.style.display = "block";
        work.style.display = "none";
        workheader.classList.remove("active");

       educationheader.classList.add("active");
    }
});
workheader.addEventListener("click", () => {
    if (work.style.display === "none") {
        work.style.display = "block";
        education.style.display = "none";
        educationheader.classList.remove("active");
      
        workheader.classList.add("active")
    }
});


