let inputPasswod = document.getElementById("Passwod");
let copyPassword = document.getElementById("copy");

let AddNumber = document.getElementById("AddNumber");
let AddChar = document.getElementById("AddChar");
let AddSpecialKeyWord = document.getElementById("AddSpecialKeyWords");

let PasswodLengthInput = document.getElementById("PasswodLength");

let length = 0;
PasswodLengthInput.addEventListener("click", () => {
  if (PasswodLengthInput.value < 6) {
    // console.log("he");

    return;
  } else {
    length = PasswodLengthInput.value;
  }
});

AddNumber.dataset.correct = false;
AddChar.dataset.correct = false;
AddSpecialKeyWord.dataset.correct = false;

AddNumber.addEventListener("click", () => {
  if (AddNumber.dataset.correct === "true") {
    AddNumber.dataset.correct = "false";
    AddNumber.style.backgroundColor = "#ebd9d1";
  } else {
    AddNumber.dataset.correct = "true";
    AddNumber.style.background = "#8FA31E";
  }
  console.log(AddNumber.dataset.correct);
});


AddChar.addEventListener("click", () => {
  if (AddChar.dataset.correct === "true") {
    AddChar.dataset.correct = "false";
    AddChar.style.backgroundColor = "#ebd9d1";
  } else {
    AddChar.dataset.correct = "true";
    AddChar.style.background = "#8FA31E";
  }
  console.log(AddChar.dataset.correct);
});


AddSpecialKeyWord.addEventListener("click", () => {
  if (AddSpecialKeyWord.dataset.correct === "true") {
    AddSpecialKeyWord.dataset.correct = "false";
    AddSpecialKeyWord.style.backgroundColor = "#ebd9d1";
  } else {
    AddSpecialKeyWord.dataset.correct = "true";
    AddSpecialKeyWord.style.background = "#8FA31E";
  }
  console.log(AddSpecialKeyWord.dataset.correct);
});

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let specialKeyWord = "!@#$%^&*()_+[]{}|;:,.<>?/`~";


PasswodLengthInput.addEventListener("keyup", (e) => {
  length = Number(PasswodLengthInput.value);

  if (length < 12 && length > 5) {
    length = Number(PasswodLengthInput.value);
    console.log("OK length");
  }
  console.log("Current length:", length);
});

function PassWordGenrator() {
  if (length == 0) {
    length = 12;
  }
  let Passwod = "";

  while (length > Passwod.length) {
    if (length > 12) {
      console.log("error");
      PasswodLengthInput.value = "";
      inputPasswod.value = "Enter Number under 12";
      return;
    }
    if (length < 6) {
      inputPasswod.value = "Error: too short";
    }
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
  Passwod = Passwod.slice(0, length);
  console.log(Passwod);

  inputPasswod.value = Passwod;
  PasswodLengthInput.value = "";
}

copyPassword.addEventListener("click", () => {
  navigator.clipboard
    .writeText(inputPasswod.value)
    .then(() => alert("Password Generated Copied"))
    .catch((err) => console.error("Copy failed", err));
});
