const dob = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  //   console.log("DateOfBirth :", dob.value);
  //   console.log("Lucky Number :", luckyNumber.value);
  let date = dob.value;
  date = date.replaceAll("-", "");
  date = Number(date);
  let sum = 0;

  while (date != 0) {
    sum = sum + (date % 10);
    date = Math.floor(date / 10);
  }
  console.log(sum);
});
