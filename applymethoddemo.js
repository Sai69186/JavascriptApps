// apply method demo
const studentinfo = {
  studentdetails: function (qualification, branch) {
    return this.rollno + " " + this.sname + " " + qualification + " " + branch;
  },
};
const student = {
  rollno: 12434,
  sname: "Santhosh",
};
console.log(studentinfo.studentdetails.apply(student, ["btech", "CSE"]));
