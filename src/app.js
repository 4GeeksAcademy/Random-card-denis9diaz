import "bootstrap";
import "./style.css";

window.onload = () => {
  generateNewCard();

  let timerValue = 2;
  updateTimer();

  let timerInterval = setInterval(() => {
    if (timerValue <= 0) {
      generateNewCard();
      timerValue = 2;
    } else {
      timerValue--;
    }
    updateTimer();
  }, 1000);

  document.getElementById("generateNewCard").addEventListener("click", () => {
    generateNewCard();
    timerValue = 2;
    updateTimer();
  });

  function updateTimer() {
    document.getElementById("timerValue").innerText = timerValue;
  }
};

let generateNewCard = () => {
  let cardElement = document.getElementById("customCard");
  cardElement.className = "card";
  cardElement.innerHTML = "card";

  let cardHeight = document.getElementById("cardHeight").value || 600;
  let cardWidth = document.getElementById("cardWidth").value || 400;

  cardElement.style.height = cardHeight + "px";
  cardElement.style.width = cardWidth + "px";

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
