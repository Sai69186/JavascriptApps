//ananymous function it means without names
let prices = [20000, 30000, 50000, 40000];
const newprices = prices.map((val) => {
  return val - 5000;
});
console.log(newprices);
//call-back functions as named functions
function devara() {
  console.log(
    "devara adiginadu ante cheppinadu ani ardham adhe seppinadu ante...."
  );
}
function panIndiamovie(koratalamovie) {
  return koratalamovie;
}
panIndiamovie(devara());
