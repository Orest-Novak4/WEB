const emojis = ['🎃', '🥵', '❤️‍🔥', '🫥', '😶‍🌫️', '🫠'];
let cards = [...emojis, ...emojis];
cards = cards.sort(() => Math.random() - 0.5);

const grid = document.getElementById('grid');
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedCards = 0;

function createCards() {
    cards.forEach((emoji) => {
        const card = document.createElement('div');
        card.classList.add('card', 'hidden');
        card.dataset.emoji = emoji;
        card.textContent = '';
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.textContent = this.dataset.emoji;
    this.classList.remove('hidden');
    this.classList.add('revealed');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
        matchedCards += 2;
        resetBoard();
        if (matchedCards === cards.length) {
            setTimeout(() => alert('Win!'), 500);
        }
    } else {
        setTimeout(() => {
            firstCard.textContent = '';
            secondCard.textContent = '';
            firstCard.classList.add('hidden');
            secondCard.classList.add('hidden');
            firstCard.classList.remove('revealed');
            secondCard.classList.remove('revealed');
            resetBoard();
        }, 1000);
    }
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

createCards();
