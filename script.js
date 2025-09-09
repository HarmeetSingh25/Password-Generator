let inputPasswod = document.getElementById("Passwod");
let copyPassword = document.getElementById("copy");

let AddNumber = document.getElementById("AddNumber");
let AddChar = document.getElementById("AddChar");
let AddSpecialKeyWord = document.getElementById("AddSpecialKeyWords");

AddNumber.dataset.correct = true;
AddChar.dataset.correct = true;
AddSpecialKeyWord.dataset.correct = true;

AddNumber.addEventListener("click", () => {
  if (AddNumber.dataset.correct === "true") {
    AddNumber.dataset.correct = "false";
  } else {
    AddNumber.dataset.correct = "true";
  }
  console.log(AddNumber.dataset.correct);
});
AddChar.addEventListener("click", () => {
  if (AddChar.dataset.correct === "true") {
    AddChar.dataset.correct = "false";
  } else {
    AddChar.dataset.correct = "true";
  }
  console.log(AddChar.dataset.correct);
});
AddSpecialKeyWord.addEventListener("click", () => {
  if (AddSpecialKeyWord.dataset.correct === "true") {
    AddSpecialKeyWord.dataset.correct = "false";
  } else {
    AddSpecialKeyWord.dataset.correct = "true";
  }
  console.log(AddSpecialKeyWord.dataset.correct);
});

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let specialKeyWord = "!@#$%^&*()_+[]{}|;:,.<>?/`~";
let length = 12;
function PassWordGenrator() {
  let Passwod = "";
  while (length > Passwod.length) {
    if (
      AddNumber.dataset.correct === "true" ||
      AddChar.dataset.correct === "true" ||
      AddSpecialKeyWord.dataset.correct === "true"
    ) {
      if (AddNumber.dataset.correct === "true") {
        Passwod += number[Math.floor(Math.random() * number.length)];
      }

      if (AddChar.dataset.correct === "true") {
        Passwod += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        Passwod += upperCase[Math.floor(Math.random() * upperCase.length)];
      }
      if (AddSpecialKeyWord.dataset.correct === "true") {
        Passwod +=
          specialKeyWord[Math.floor(Math.random() * specialKeyWord.length)];
      }
    } else {
      Passwod += lowerCase[Math.floor(Math.random() * lowerCase.length)];
      Passwod += upperCase[Math.floor(Math.random() * upperCase.length)];
      Passwod += number[Math.floor(Math.random() * number.length)];
      Passwod +=
        specialKeyWord[Math.floor(Math.random() * specialKeyWord.length)];
    }
  }
  console.log(Passwod);

  inputPasswod.value = Passwod;
}
copyPassword.addEventListener("click", () => {
  inputPasswod.select();
  document.execCommand("copy");
});
