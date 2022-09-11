class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      [this.cards[i], this.cards[j] = this.cards[j], this.cards[i]];
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (
      card1.getAttribute("data-card-name") ===
      card2.getAttribute("data-card-name")
    ) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    return this.cards.length === this.pairsClicked * 2;
  }
}
