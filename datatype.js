//datatypes in javascript;
var empid = 2001;
console.log(typeof empid); //number
var esalary = 49000.99;
console.log(typeof esalary);
var emobilenumber = 9885645252;
console.log(typeof emobilenumber);
var ename = "Sai";
console.log(typeof ename);
var pemp = false;
console.log(typeof pemp);
var pf = null;
console.log(typeof pf);
var esi;
console.log(typeof esi);
var empdesg = ["Hr", "Developer", "Manager"];
console.log(typeof empdesg);
var customerinfo = {
  cid: 1001,
  cname: "Sai",
  caddress: "Patha Kotha Palem",
};
console.log(typeof customerinfo);
//Es-6 New Datatype
var tcsturnover = BigInt(1012548976341210125879634);
console.log(typeof tcsturnover);
var pname = Symbol("Realme");
var pname1 = Symbol("Realme");
console.log(typeof pname1);
console.log(pname == pname1);
