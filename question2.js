// 2. (3p) Skapa ett inputfält och en knapp på html-sidan. När man klickar på
// knappen ska det man skrev i input-fältet synas nedanför input-fältet i en div.

const form = document.getElementById("form");


function addText () {
const textForm = document.getElementById("text").value;
  form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("addsHere").innerHTML +=
    `<p>${textForm}</p>`;
});
};


