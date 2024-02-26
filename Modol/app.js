const popup = document.querySelector("#popup");
const btn = document.querySelector(".btn");
const OK = document.querySelector(".OK");

// const openPopup = () => {
//   popup.classList.toggle("open-popup");
// };
btn.addEventListener("click", () => {
  popup.classList.toggle("open-popup");
});

OK.addEventListener("click", () => {
  popup.classList.remove("open-popup");
});
