//multi-line strings
let desc = `Top College In a Ap
More recruitments
Many Activities`;
console.log(desc);
//string interpulation
let fname = "Sai Chandra Mouli";
let lname = "Maguluri";
console.log(`${fname} ${lname}`);
//array destructing
let pnames = ["relame", "LG", "Vivo"];
let [Brand1, Brand2, Brand3] = pnames;
console.log(Brand1);
console.log(Brand2);
console.log(Brand3);
//Object destructing
const movieinfo = {
  Name: "Devara",
  Director: "Koratala Shiva",
  Producer: "Nandamuri Kalyan Ram",
  Hero: "Man Of Masses NTR",
};
let { Name, Director, Producer, Hero } = movieinfo;
console.log(Name);
console.log(Director);
console.log(Producer);
console.log(Hero);
