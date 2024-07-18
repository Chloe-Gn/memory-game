const cards = document.querySelectorAll(".card");

let isFlippedCard = false;
let firstCard, secondCard;
let lockboard = false;


console.log(cards)

function flipCard() {
    this.classList.add('flip');
    if (!isFlippedCard) {
        isFlippedCard = true;
        firstcard = this;
        return;
    }  else {
    secondCard = this;
    isFlippedCard = false;
    checkForMatch();
        }
}



const checkForMatch = () => {
   let isMatch = firstCard.dataset.fruit === secondCard.dataset.fruit; isMatch ? disableCards() : unflipCards();
}

const unflipCards = () => {
    setTimeOut(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1500);
}



const disableCards = () => {
     firstCard.removeEventListener('Click',flipCard);
    secondCard.removeEventListener('Click',flipCard);
}

   


// let flipCard = (event) => {
//     const card = event.currentTarget;
//     card.classList.add('flip');
//         if (!isFlippedCard) {
//             isFlippedCard = true;
//             firstCard = card;
//         }
// };


cards.forEach(card => card.addEventListener('click',flipCard));



