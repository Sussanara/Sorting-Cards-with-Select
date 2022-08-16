/* eslint-disable */
import "bootstrap";
import "./style.css";

/* Numbers and Suits of the Deck */
const suits = ["spade", "heart", "diamond", "clover"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Main Function */
function generateCardArray(number) {
  let cardArray = [];
  for (let i = 0; i < number; i++) {
    cardArray.push(cardPick());
  }
  return cardArray;
}
/* Random Card picker */
function cardPick() {
  var numberSuit = Math.floor(Math.random() * 4);
  var numberNum = Math.floor(Math.random() * 13);
  var result = [];
  result.push(suits[numberSuit]);
  result.push(numbers[numberNum]);
  return result;
}

let selectionNumber = -1;

function selectionSortCards(array) {
  /* Selection Sort Algorithm */
  console.log(array);
  for (let i = 0; i < array.length - 1; i++) {
    selectionNumber++;
    renderCardArraySelection(array);
    let minimumIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j][1] < array[minimumIndex][1]) {
        minimumIndex = j;
      }
    }
    var aux = array[i];
    array[i] = array[minimumIndex];
    array[minimumIndex] = aux;
  }
  console.log(array);
}

/* Rendering Cards Test */
function toStringConverter(number) {
  if (number === 11) {
    return "J";
  } else if (number === 12) {
    return "Q";
  } else if (number === 13) {
    return "K";
  } else {
    return number;
  }
}

function renderCardArray(array) {
  var cardID = 0;
  for (let card of array) {
    /* Unique DIV creation for card body*/
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("id", "div" + cardID);
    cardDiv.setAttribute("class", "cardbody");
    /* Card div element generation */
    const cardUpperIcon = document.createElement("div");
    cardUpperIcon.setAttribute("id", "upperIcon");

    const cardNumber = document.createElement("div");
    cardNumber.setAttribute("id", "number");

    const cardLowerIcon = document.createElement("div");
    cardLowerIcon.setAttribute("id", "lowerIcon");

    if (card[0] == "heart") {
      cardUpperIcon.style.color = "red";
      cardNumber.style.color = "red";
      cardLowerIcon.style.color = "red";
      cardUpperIcon.innerHTML = "♥";
      cardLowerIcon.innerHTML = "♥";
      cardNumber.innerHTML = toStringConverter(card[1]);
    } else if (card[0] == "diamond") {
      cardUpperIcon.style.color = "red";
      cardNumber.style.color = "red";
      cardLowerIcon.style.color = "red";
      cardUpperIcon.innerHTML = "♦";
      cardLowerIcon.innerHTML = "♦";
      cardNumber.innerHTML = toStringConverter(card[1]);
    } else if (card[0] == "spade") {
      cardUpperIcon.innerHTML = "♠";
      cardLowerIcon.innerHTML = "♠";
      cardNumber.innerHTML = toStringConverter(card[1]);
    } else {
      cardUpperIcon.innerHTML = "♣";
      cardLowerIcon.innerHTML = "♣";
      cardNumber.innerHTML = toStringConverter(card[1]);
    }

    /* Card Pushing into HTML */
    const cardDisplay = document.getElementById("cardDisplay");
    cardDisplay.appendChild(cardDiv);
    cardDiv.appendChild(cardUpperIcon);
    cardDiv.appendChild(cardNumber);
    cardDiv.appendChild(cardLowerIcon);

    cardID++;
  }
}

function renderCardArraySelection(array) {
  var cardID = 0;
  let selectionDiv = document.createElement("div");
  selectionDiv.style.display = "flex";
  selectionDiv.style.justifyContent = "space-evenly";
  document.body.appendChild(selectionDiv);
  let selectionId = document.createElement("h1");
  selectionId.innerHTML = selectionNumber;
  selectionId.style.paddingTop = "170px";
  selectionDiv.appendChild(selectionId);
  for (let card of array) {
    /* Unique DIV creation for card body*/
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("id", "div" + cardID);
    cardDiv.setAttribute("class", "cardbody");
    /* Card div element generation */
    const cardUpperIcon = document.createElement("div");
    cardUpperIcon.setAttribute("id", "upperIcon");

    const cardNumber = document.createElement("div");
    cardNumber.setAttribute("id", "number");

    const cardLowerIcon = document.createElement("div");
    cardLowerIcon.setAttribute("id", "lowerIcon");
    /* Return of Special Characters */
    if (card[0] == "heart") {
      cardUpperIcon.style.color = "red";
      cardNumber.style.color = "red";
      cardLowerIcon.style.color = "red";
      cardUpperIcon.innerHTML = "♥";
      cardLowerIcon.innerHTML = "♥";
      cardNumber.innerHTML = toStringConverter(card[1]);
    } else if (card[0] == "diamond") {
      cardUpperIcon.style.color = "red";
      cardNumber.style.color = "red";
      cardLowerIcon.style.color = "red";
      cardUpperIcon.innerHTML = "♦";
      cardLowerIcon.innerHTML = "♦";
      cardNumber.innerHTML = toStringConverter(card[1]);
    } else if (card[0] == "spade") {
      cardUpperIcon.innerHTML = "♠";
      cardLowerIcon.innerHTML = "♠";
      cardNumber.innerHTML = toStringConverter(card[1]);
    } else {
      cardUpperIcon.innerHTML = "♣";
      cardLowerIcon.innerHTML = "♣";
      cardNumber.innerHTML = toStringConverter(card[1]);
    }

    /* Card Pushing into HTML */
    cardDiv.appendChild(cardUpperIcon);
    cardDiv.appendChild(cardNumber);
    cardDiv.appendChild(cardLowerIcon);
    selectionDiv.appendChild(cardDiv);
    cardID++;
  }
}

/* selectionSortCards(cardArray); */

var drawButton = document.querySelector("#drawButton");
var sortButton = document.querySelector("#sortButton");
var textBar = document.querySelector("#numberInput");
var cardArray = [];

drawButton.addEventListener("click", function() {
  const input = document.getElementById("numberInput").value;
  if (input === "") {
    console.log("Invalid Input!");
  } else {
    if (document.querySelector("#cardDisplay").hasChildNodes()) {
      document.querySelector("#cardDisplay").innerHTML = "";
      cardArray = generateCardArray(input);
      renderCardArray(cardArray);
    } else {
      cardArray = generateCardArray(input);
      renderCardArray(cardArray);
    }
  }
});

sortButton.addEventListener("click", function() {
  selectionSortCards(cardArray);
});
