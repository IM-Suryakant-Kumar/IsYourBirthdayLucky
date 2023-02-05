const dob = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  console.log("DateOfBirth :", dob.value);
  console.log("Lucky Number :", luckyNumber.value);
});
