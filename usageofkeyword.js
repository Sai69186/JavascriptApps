// Usage of this keyword
const employeeInfo = {
  firstName: "Santhosh",
  lastName: "Munipalli",
  empDetails: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(employeeInfo.empDetails());
