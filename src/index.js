const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
    memory = document.getElementsByClassName("data-card-name");
    memory.innerHTML = memoryGame.shuffleCards();
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      
      let a = card.classList.toggle("turned");
      memoryGame.pickedCards.push(card);

      if (memoryGame.pickedCards.length === 2) {
        let firstCard = memoryGame.pickedCards[0];
        let secondCard = memoryGame.pickedCards[1];
        if (memoryGame.checkIfPair(firstCard, secondCard)) {
          let guessed = document.getElementById("pairs-guessed");
          guessed.innerHTML = memoryGame.pairsGuessed;
        } else {
          setTimeout(() => {
            firstCard.classList.toggle("turned");
            secondCard.classList.toggle("turned");
          }, 1000);
        }
        let clicked = document.getElementById("pairs-clicked");
        clicked.innerHTML = memoryGame.pairsClicked;
        memoryGame.pickedCards = [];
      }
    });
  });
});
