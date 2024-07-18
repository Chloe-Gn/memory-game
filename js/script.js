


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

function verifyFormInputs(event) {
  const errors = []
  const user = {}
  
  event.preventDefault()

  const $inputs = event.target.querySelectorAll('input')

 
  $inputs.forEach(input => {
      switch (input.id) {
          case "email":
              console.log("email");
              if (!checkEmail(input.value)) errors.push([input.id, "L'email n'est pas valide"])
              else user.email = input.value
              break;
          case "password":
              console.log("password");
               if (!checkPassword(input.value)) errors.push([input.id, "motdepasse n'est pas valide"])
               else user.password = input.value
              break;
          case "birthDate":
              console.log("birthDate");
               if (!checkDate(input.value)) errors.push([input.id, "birthDate n'est pas valide"])
               else user.birthDate = input.value
              break;
          default:
              break;
      }
  });


  if (errors.length > 0) {
  
      errors.forEach(error => {
         
          const $displayErrorTarget = document.getElementById(`erreur-${error[0]}`)
          $displayErrorTarget.innerHTML = ''
          $displayErrorTarget.innerHTML = error[1]
      })
  } else {
      
      saveUser(user)
      document.getElementById('message-succes').textContent = "User saved"
  }
}



function checkEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  return emailPattern.test(email);
}

function checkPassword(password) {
  const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&!*])[A-Za-z\d@#$%^&!*]{8,}$/;
  return passwordPattern.test(password);
}

function checkDate(date) {
  
  const dateObject = new Date(date);
  return !Number.isNaN(dateObject.getTime());
}

function checkNumber(number) {
  return !Number.isNaN(number)
}

// End of form




