import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomNumber();
};

window.onload = () => {
  setInterval(() => {
    generateNewCard();
  }, 2000);

  document.getElementById("generateNewCard");
  document.addEventListener("click", generateNewCard);
};

let generateNewCard = () => {
  let cardElement = document.querySelector(".card");
  cardElement.className = "card";
  cardElement.innerHTML = "card";

  cardElement.classList.add(generateRandomSuit());
  cardElement.innerHTML = generateRandomNumber();
};

let generateRandomSuit = () => {
  let suits = ["heart", "diamond", "club", "spade"];
  let indexSuits = Math.floor(Math.random() * suits.length);
  return suits[indexSuits];
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
