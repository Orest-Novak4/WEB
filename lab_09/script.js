const cardValues = ["A", "B", "C", "D", "A", "B", "C", "D"];
const shuffledCards = cardValues.sort(() => Math.random() - 0.5);

const gameBoard = document.getElementById("gameBoard");
const message = document.getElementById("message");

let flippedCards = [];
let matchedPairs = 0;

shuffledCards.forEach((value) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.value = value;
    card.textContent = "";
    gameBoard.appendChild(card);

    card.addEventListener("click", () => {
        if (card.classList.contains("flipped") || card.classList.contains("matched")) {
            return;
        }

        card.textContent = value;
        card.classList.add("flipped");
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            checkForMatch();
        }
    });
});

function checkForMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.value === card2.dataset.value) {
        card1.classList.add("matched");
        card2.classList.add("matched");
        matchedPairs++;
        flippedCards = [];

        if (matchedPairs === 4) {
            message.textContent = "You win! 🎉";
        }
    } else {
        setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            card1.textContent = "";
            card2.textContent = "";
            flippedCards = [];
        }, 1000);
    }
}
