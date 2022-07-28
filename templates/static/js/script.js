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


var btnH = document.querySelector("#buttonHard");
btnH.addEventListener("click", function() {
  var div = document.querySelector("#contentsHard");
  var icon = document.querySelector("#icon-hard");

  if(div.style.display === "none") {
    icon.style.transform = 'rotate(180deg)';
    icon.style.transition = '0.5s all';
    } else {
    icon.style.transform = 'rotate(1deg)';
    icon.style.transition = '0.5s all';
  }
    
});
var btnS = document.querySelector("#buttonSoft");
btnS.addEventListener("click", function() {
    var div = document.querySelector("#contentsSoft");
    var icon = document.querySelector("#icon-soft");
    
  if(div.style.display === "none") {
      icon.style.transform = 'rotate(180deg)';
      icon.style.transition = '0.5s all';
    } else {
    icon.style.transform = 'rotate(1deg)';
    icon.style.transition = '0.5s all';
  }
});

function icon(el, d) {
  var div = document.getElementById(d);
  var icon = document.getElementById(el);

  if(div.style.display === "none") {
    div.style.display = "block";
    icon.style.transform = 'rotate(180deg)';
    icon.style.transition = '0.5s all';
  } else {
    div.style.display = "none";
    icon.style.transform = 'rotate(1deg)';
    icon.style.transition = '0.5s all';
}
};

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