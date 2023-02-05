const dob = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const button = document.querySelector(".button");
const message = document.querySelector(".message");

button.addEventListener("click", () => {
  //   console.log("DateOfBirth :", dob.value);
  //   console.log("Lucky Number :", luckyNumber.value);
  let date = dob.value;
  date = date.replaceAll("-", "");
  date = Number(date);
  let sum = 0;
  // Calculate sum
  while (date != 0) {
    sum = sum + (date % 10);
    date = Math.floor(date / 10);
  }
  //   console.log(sum);

  // Check If lucky
  if (sum % Number(luckyNumber.value) === 0) {
    showMsg("Your birthday is lucky");
  } else {
    showMsg("Your birthday is NOT lucky, so sad");
  }
});

function showMsg(msg) {
    message.innerText = msg;
}
