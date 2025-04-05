const quotes = [
  "Believe you can and you're halfway there.",
  "Stay hungry. Stay foolish.",
  "The only way to do great work is to love what you do.",
  "Dream big and dare to fail.",
  "Act as if what you do makes a difference. It does."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}
