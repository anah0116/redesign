const btn = document.querySelector(".toggle_btn");
const menu = document.querySelector(".menu");

btn.addEventListener("click", toggleMenu);

function toggleMenu() {
  btn.classList.toggle("active");
  menu.classList.toggle("active");

  if (btn.classList.contains("active")) {
    btn.textContent = "close";
  } else {
    btn.textContent = "open";
  }
}
