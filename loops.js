//loops in js
//for loop
for (i = 1; i <= 10; i++) {
  console.log(" iValue is:" + i);
}
//while loop
let j = 1;
while (j <= 10) {
  console.log("j Value is:" + j);
  j++;
}
//do while
let k = 1;
do {
  console.log("k value is:" + k);
  k++;
} while (k <= 10);
//loops in advanced js(ES-6)
//for-in and for-of
//these loops are used to get data from iterables(array,object,string)
let pnames = ["realme", "samsung", "redmi", "oneplus"];
for (let names of pnames) {
  console.log(names);
}
let empinfo = {
  eid: 1001,
  ename: "Sai",
  esal: 60000,
};
for (let info in empinfo) {
  console.log(empinfo[info]);
}
let collegename = "Vignan";
for (let si in collegename) {
  console.log(collegename[si]);
}
for (let si of collegename) {
  console.log(si);
}
//for ecah is a method
const pname = ["Realme", "Samsung", "Redmi", "Moto"];
let products = pname.forEach((value) => {
  console.log(value);
});
