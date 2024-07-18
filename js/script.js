const cards = document.querySelectorAll(".card");

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      location.reload();
    }
  };

  const numberOfAttempts = document.getElementById("number-of-attempts");
  

let isFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let count = 0;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add("flip");
  if (!isFlippedCard) {
    isFlippedCard = true;
    firstCard = this;
    console.log("I am first card: " + firstCard)
    return;
  } else {
    secondCard = this;
    console.log("I am second card: " + secondCard)
    checkForMatch();
    console.log("I am first card: " + firstCard)
    console.log("I am second card: " + secondCard);
    count = incrementCount();
    displayCount();
  }
}


const displayCount = () => {
  setTimeout(() => {
    numberOfAttempts.innerHTML = count;
   }, 500);
  }


const incrementCount = () => {
    return ++count ;
  }



const checkForMatch = () => {
  let isMatch = firstCard.dataset.fruit === secondCard.dataset.fruit;
  isMatch ? disableCards() : unflipCards();
};

const unflipCards = () => {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1500);
};

function disableCards () {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
};

const resetBoard = () => {
  isFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
};

const shuffle = () => {
  cards.forEach((card) => {
    let randomOrder = Math.floor(Math.random() * 12);
    card.style.order = randomOrder;
  });
};

shuffle();

// IIFE: Immediately invoked function element

// (function shuffle() {
//     cards.forEach(card => {
//         let randomOrder = Math.floor(Math.random() * 12);
//         card.style.order = randomOrder;
//     });
// })();

cards.forEach(card => card.addEventListener("click", flipCard));

