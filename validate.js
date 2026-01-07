//validation logic
function validate() {
  //request data gathering logic
  let uname = document.getElementById("usernamee").value;
  let pswd = document.getElementById("pswd").value;
  let cnfrmpaswd = document.getElementById("cnfrmpswd").value;
  let mobno = document.getElementById("phnno").value;
  let mailid = document.getElementById("mailid").value;
  let gender = document.querySelector('input[name="gender"]:checked');
  let dob = document.getElementById("dob").value;
  let address = document.getElementById("address").value.trim();
  let qual = document.getElementById("qual").value;
  let skillsSelect = document.getElementById("skills");
  let selectedSkills = Array.from(skillsSelect.selectedOptions).map(option => option.value);
  let shiftCheckboxes = document.querySelectorAll('input[name="shift"]:checked');
  let resume = document.getElementById("resume").value

  /// regular expressions
  let regexp = /[a-z][A-Z]/;
  let regexp1 = /[0-9]{10}/;
  //validation logic
  if (uname == "") {
    alert("please enter username");
    return false;
  }
  if (pswd == "") {
    alert("please enter password");
    return false;
  }
  if (pswd.length < 8 || pswd.length > 12) {
    alert("password should be minimum 8 characters and maximum 12 chars");
    return false;
  }

  if (!regexp.test(pswd)) {
    alert("password should be combination of small and capital alphabets");
    return false;
  }
  if (cnfrmpaswd == "") {
    alert("please re-enter password");
    return false;
  }
  if (pswd != cnfrmpaswd) {
    alert("Passwords should match");
    return false;
  }
  if (mobno == "") {
    alert("Please enter Mob No.");
    return false;
  }
  if (!regexp1.test(mobno)) {
    alert("enter valid mobile number with 10 digits");
    return false;
  }
  if (mailid == "") {
    alert("Enter Email id");
    return false;
  }
  if (!mailid.includes(".com")) {
    alert("Enter valid email");
    return false;
  }
  if (!gender) {
    alert("Please select your gender");
    return false;
  }
  if (!dob) {
    alert("Please select your date of birth");
    return false;
  }
  if (!address) {
    alert("Please enter your address");
    return false;
  }
  if (!qual) {
    alert("Please select your qualification");
    return false;
  }
  if (selectedSkills.length === 0) {
    alert("Please select at least one skill");
    return false;
  }
  if (shiftCheckboxes.length === 0) {
    alert("Please select at least one shift preference");
    return false;
  }
  if (!resume) {
    alert("Please upload your resume");
    return false;
  }
  // Check file extension
  let allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
  if (!allowedExtensions.exec(resume)) {
    alert("Please upload file having extensions .pdf, .doc or .docx only");
    return false;
  }
  return true;
}
