const cards = document.querySelectorAll(".memory-card")

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let firstCounter = document.querySelector(".firstCounter")
let secondCounter = document.querySelector(".secondCounter")
let gameStatus = document.querySelector(".gameStatus")
let c = 0
let g = 0
function flipCard(){
    

    if (lockBoard) return;
    if (this === firstCard) return;
   this.classList.add("flip");
    if (!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

   secondCard = this;
   hasFlippedCard = false;

   checkForMatch();
}
cards.forEach(card => card.addEventListener("click", flipCard));
function checkForMatch(){
    console.log(firstCard.dataset.framework)
    console.log(secondCard.dataset.framework)
    if (firstCard.dataset.framework === secondCard.dataset.framework){
        console.log("2")
        disableCards();
        c++
        secondCounter.textContent = c
        if (c == 6){
            gameStatus.textContent = "You Win"
            gameStatus.style.display = "block"
        }
        return
    }
    else {
        g++
        firstCounter.textContent = g

    }

    unflipCards();
}

function disableCards(){
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard()
}
function unflipCards() {
    lockBoard = true;

    setTimeout( () => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        lockBoard = false;
    }, 1500);
}
cards.forEach(card => card.addEventListener("click", flipCard));

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false,false]
    [firstCard,secondCard] = [null,null]
}

(function shuffle() {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 12);
            card.style.order = randomPos;
        });
    })();
