const box = document.querySelector("#box");

const resizebox = document.getElementById("resize");
const round = document.getElementById("round");
const shadow = document.getElementById("shadow");
const reset = document.getElementById("reset");

document.getElementById("resize").onclick = function () {
  box.style.background = "blue";
};

round.addEventListener("click", function () {
  box.style.borderRadius = "50%";
  box.classList.toggle("reshape");
});

shadow.addEventListener("click", function () {
  box.style.boxShadow = "15px 25px 15px rgba(255,0,0,0.5)";
});

reset.addEventListener("click", function () {
  box.className = ""; // remove classes
  box.style = ""; // clear inline styles
});
