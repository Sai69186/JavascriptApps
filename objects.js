// //objects in js
// const movieinfo = {
//   moviename: "Akhanda2",
//   heroname: "NBK",
//   directorname: "Boyapati",
// };
// //how to get specific property-director name
// console.log(movieinfo.directorname);
// console.log(movieinfo["heroname"]);
// for (let info in movieinfo) {
//   console.log(movieinfo[info]);
// }
// //ES-6+ new features
// //object.keys
// Object.keys(movieinfo).forEach((key) => {
//   console.log(key);
// });
// //to get only values(object.values)
// Object.values(movieinfo).forEach((val) => {
//   console.log(val);
// });
// //to get key and values
// //Object.entries
// Object.entries(movieinfo).forEach((set) => {
//   console.log(set[0] + " : " + set[1]);
// });
// //for of
// for (let [pro, value] of Object.entries(movieinfo)) {
//   console.log(pro + " : " + value);
// }
// //nested object
// const myObj = {
//   name: "John",
//   age: 30,
//   //nested car
//   cars: [
//     { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//     { name: "BMW", models: ["320", "X3", "X5"] },
//     { name: "Fiat", models: ["500", "Panda"] },
//   ],
// };
// console.log(myObj.cars[0].models);
//cart objects
const placedorder = {
  products: [
    { pid: 1001, pname: "Drone", price: 10000 },
    { pid: 1002, pname: "AC", price: 30000 },
  ],
  shippingaddr: {
    area: "Vadlamudi",
    street: "VLITS",
    pincode: 522213,
  },
  userinfo: {
    uid: 1004,
    uname: "Sai",
    phno: 8885309616,
  },
};
console.log(placedorder.userinfo.uname);
