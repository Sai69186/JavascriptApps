//Arrays Explanation
//store dissimilar elements
const demoarr = [10, 20, 30, "Ram", "Goti"];
console.log(demoarr);
const pname = ["Realme", "Samsung", "Redmi", "Moto"]; //literal syntax
console.log(pname);
//another way
let prices1 = new Array(20000, 100000, 80000, 50000); //object syntax
console.log(prices1);
//to get values
let pnames1 = ["Realme", "Samsung", "Redmi", "Moto"];
for (const ds of pnames1) {
  console.log(ds);
}
//for each method(if we implement one function inside another function is callback function)
const pnames0 = ["Realme", "Samsung", "Redmi", "Moto"];
let products = pnames0.forEach((value) => {
  console.log(value);
});
//to add elements into array push,unshifyt,slice
const pnames2 = ["Realme", "Samsung", "Redmi", "Moto"];
pnames.push("Iphone");
console.log(pnames2);
pnames.unshift("Poco");
console.log(pnames2);
pnames.splice(2, 0, "Oneplus", "Oppo");
console.log(pnames2);
//to remove pop,shift,splice methods
//pop method
pnames.pop();
console.log(pnames2);
pnames.shift();
console.log(pnames2);
pnames.splice(4, 1);
console.log(pnames2);
//delete
//delete pnames[i]
console.log(pnames2.sort());
//reverse
console.log(pnames2.reverse());
pnames2[2] = "Nokia";
console.log(pnames2);
// //concate arrays
let pnames2 = ["Samsung", "Realme", "Nokia", "Oneplus", "Moto"];
let pnames2 = ["GT", "Nothing"];
let prices2 = new Array(20000, 100000, 80000, 50000);
//console.log(pnames.concat(pnames1));
//spread operator
let productNames = [...pnames, ...pnames1];
console.log(productNames);
let sum = prices.reduce((tot, val) => {
  return tot + val;
});
console.log(sum);
//map
let offerprice = prices.map((val) => {
  return val - 2000;
});
console.log(offerprice);
