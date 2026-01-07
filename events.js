function btnResult() {
  alert("Hello");
}
let btnvalue = document.getElementById("demo");
btnvalue.addEventListener("click", btnResult);
const arrow = () => {
  alert("Go-Ro");
};
let arrowdemo = document.getElementById("say");
arrowdemo.addEventListener("click", arrow);
//mouse hover mouse out logic
let h2value = document.getElementById("sample");
const mouseHover = () => {
  h2value.style.color = "blue";
};
const mouseOut = () => {
  h2value.style.color = "default";
};
h2value.addEventListener("mousehover", mouseHover);
h2value.addEventListener("mouseout", mouseOut);
