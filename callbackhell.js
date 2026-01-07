const studentInfo = () => {
  console.log("Sudent Details are:");
  setTimeout(() => {
    let rollnumbers = [1, 2, 3, 4];
    console.log(rollnumbers);
    setTimeout(
      (roll_number) => {
        const data = {
          sname: "Sai",
          qualification: "B.Tech",
        };
        console.log(
          `student name is ${data.sname} 
        qualification is ${data.qualification} and roll_number is ${roll_number}`
        );
      },
      2000,
      rollnumbers[1]
    );
  }, 2000);
};
studentInfo();
//java script is known is ecma script
