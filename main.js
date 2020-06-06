"use strict";
const paths = document.querySelectorAll("path");
paths.forEach((path) => {
  if (path.parentElement.id === "레이어_19") {
    return;
  } else {
    const title = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "title"
    );
    path.appendChild(title);
    title.textContent = path.id || path.parentElement.id;
  }
});
function clickHandler(evt) {
  alert("hi");
}
