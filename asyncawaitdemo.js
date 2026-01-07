//async-avoid logic
const movieresult = () => {
  return new Promise((resolve, reject) => {
    let rating = 3;
    if (rating > 4) {
      resolve("Good Movie");
    } else {
      reject("Waste of our Time");
    }
  });
};
const result = async () => {
  try {
    const res = await movieresult();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
result();
