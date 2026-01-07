//promises demo
const movierating = new Promise((resolve, reject) => {
  let rating = 4.2;
  if (rating > 4) {
    resolve("Good Movie");
  } else {
    reject("Waste of our Time");
  }
});
//how to call promise
movierating
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
