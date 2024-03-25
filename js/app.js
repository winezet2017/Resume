// const nav = document.getElementById("nav");
// const btn = document.getElementById("menu-icon");

// btn.addEventListener("click", () => {
//   nav.classList.toggle("active");
//   btn.classList.toggle("active");
// });

function showSidebar() {
  const sidebar = document.querySelector(".side-bar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".side-bar");
  sidebar.style.display = "none";
}
