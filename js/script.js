const body = document.querySelector("body");
const nav = document.querySelector("nav");
const darkmode = document.querySelector(".darkmode");
const searchToggle = document.querySelector(".search-toggle");
const sidebaropen = document.querySelector(".sidebaropen");
const sidebarclose = document.querySelector(".sidebarclose");

let getItem = localStorage.getItem("mode");

if (getItem && getItem === "dark-mode") {
  body.classList.toggle("dark");
}

darkmode.addEventListener("click", () => {
  darkmode.classList.toggle("active");

  body.classList.toggle("dark");

  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});

searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

sidebaropen.addEventListener("click", () => {
  nav.classList.add("active");
});

sidebarclose.addEventListener("click", () => {
  nav.classList.remove("active");
});
