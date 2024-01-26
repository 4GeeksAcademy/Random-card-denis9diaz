import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomSimbolo());
  document.querySelector(".card").innerHTML = generateRandomNumero();
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

  cardElement.classList.add(generateRandomSimbolo());
  cardElement.innerHTML = generateRandomNumero();
};

let generateRandomSimbolo = () => {
  let simbolos = ["heart", "diamond", "club", "spade"];
  let indexSimbolos = Math.floor(Math.random() * simbolos.length);
  return simbolos[indexSimbolos];
};

let generateRandomNumero = () => {
  let numeros = [
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
  let indexNumeros = Math.floor(Math.random() * numeros.length);
  return numeros[indexNumeros];
};
