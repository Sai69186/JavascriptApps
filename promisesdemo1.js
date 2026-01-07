const bubblescore = new Promise((resolve, reject) => {
  let number = Math.floor(Math.random() * 10) + 1;
  if (number >= 5) {
    resolve("High Score");
  } else {
    reject("Low Score");
  }
});
bubblescore
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
