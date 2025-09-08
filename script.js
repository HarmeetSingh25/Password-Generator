let inputPasswod = document.getElementById("Passwod");
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let specialKeyWord = "!@#$%^&*()_+[]{}|;:,.<>?/`~";
let length = 12;
function PassWordGenrator() {
  let Passwod = "";
  while (length > Passwod.length) {
    Passwod += upperCase[Math.floor(Math.random() * upperCase.length)];
    Passwod += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    Passwod += number[Math.floor(Math.random() * number.length)];
    Passwod +=
      specialKeyWord[Math.floor(Math.random() * specialKeyWord.length)];
  }
  inputPasswod.value = Passwod;

}
