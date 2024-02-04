const coin = document.getElementById("coin");
const flipButton = document.getElementById("flip-button");
const resultElement = document.getElementById("result");
const overlay = document.getElementById("result-overlay");


const coinSound = new Audio("sounds/coin-flip.mp3"); // Replace with your coin flip sound file

function flipCoin() {
  coinSound.play(); // Play sound on flip
  const randomNumber = Math.random();
  const result = randomNumber < 0.5 ? "Heads" : "Tails";

  coin.classList.add("flip"); // Add spin animation class
  

  setTimeout(() => {
    coin.classList.remove("flip"); // Remove animation after delay
    resultElement.textContent = "It's " + result + "!";
    overlay.style.display = "block";
    coin.src = result === "Heads" ? "images/coin-heads.png" : "images/coin-tails.png"; // Change image based on outcome
  }, 1000); // Set animation duration

  resultElement.textContent = "It's " + result + "!";

  // Show overlay
 // overlay.style.display = "block";
}

flipButton.addEventListener("click", flipCoin);
