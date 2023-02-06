const menuToggle = document.querySelector(".menu input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
});

const tutup = () => {
  document.getElementById("checkbox").click();
};
