


// Beginning of memory game

const cards = document.querySelectorAll(".card");
const displayText = document.querySelector(".display-text");

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      location.reload();
    }
  };

  const numberOfAttempts = document.getElementById("number-of-attempts");
  let numberOFMatches = 0;

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
    return;
  } else {
    secondCard = this;
    checkForMatch();
    count = incrementCount();
    displayCount();
  }


  if (numberOFMatches === 6) {
     displayYouWon();
  }
}


const displayCount = () => {
  setTimeout(() => {
    numberOfAttempts.innerHTML = count;
   }, 400);
  }


const displayYouWon = () => {
  setTimeout(() => {
    displayText.insertAdjacentText("beforeend"," Tu as gagné !");
  },400);
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
  numberOFMatches ++;
  resetBoard();
};

const resetBoard = () => {
  [isFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
};

const shuffle = () => {
  cards.forEach((card) => {
    let randomOrder = Math.floor(Math.random() * 12);
    card.style.order = randomOrder;
  });
};


shuffle();

cards.forEach(card => card.addEventListener("click", flipCard));

// End of memory game


// Beginning of form


const $form = getElementbyID("subscription-form")


// End of form




