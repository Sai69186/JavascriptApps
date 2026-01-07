//
function one() {
  two();
  console.log("One");
}
function two() {
  three();
  console.log("Two");
}
function three() {
  console.log("Third");
}
one();
