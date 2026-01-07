// //functions in js
// function showMessage() {
//   console.log("Welcome to JS Functions");
// }
// showMessage();
// //function with parameters\
// function sumNumbers(a, b) {
//   console.log("Sum is:" + (a + b));
// }
// sumNumbers(10, 20);
// //function with return value(when we want to use this in future in some other program)
// function mulNum(a, b) {
//   return a * b;
// }
// let result = mulNum(5, 6);
// console.log("Result is:" + result);
// //New function syntax (ES-6)
// //Arrow Function
// //const arraow demo
// const arrowDemo = () => {
//   console.log("Array Function Demo");
// };
// arrowDemo();
// //arrow functions with parameters
// const addnums = (a, b) => {
//   console.log("Addition is:" + (a + b));
// };
// addnums(30, 40);
// //IN a simple way
// const addnums1 = (a, b) => a + b;
// console.log(addnums1(30, 63));
// //arrow function with return value
// const mulNums1 = (a, b) => a * b;
// let product = mulNums1(10, 20);
// console.log(product);
// //arrow functions in functions
// const arrow = (a, b, c) => {
//   console.log("First number is:" + a);
//   console.log("Second number is:" + b);
//   console.log("Third number is:" + c);
// };
// arrow(10, 20, 40);
// //Rest parameters
// const arrow = (a, b, ...c) => {
//   console.log("First number is:" + a);
//   console.log("Second number is:" + b);
//   console.log("Third number is:" + c);
// };
// arrow(10, 20, 40, 50);
//default paremeters
const addNums = (a, b) => {
  console.log("addition of two numbers is:" + (a + b));
};
addNums(10, 78);
