//promises chaining demo
const bookticket = () => {
  return new Promise((resolve, reject) => {
    resolve("Ticket Booked");
  });
};
const getpopcorn = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + "Popcorn Obtained");
  });
};

const getcoke = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + "Ready With Chilled Coke");
  });
};
//to execute
bookticket()
  .then((result) => {
    return getpopcorn(result);
  })
  .then((result) => {
    return getcoke(result);
  })
  .then((result) => {
    console.log("Wanna To Go Movie?" + result);
  })
  .catch((error) => {
    console.log(error);
  });
