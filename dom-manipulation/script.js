// Array of quote objects
const quotes = [
    { text: "Coding like poetry should be short and concise. ― Santosh Kalwar", category: "Code" },
    { text: "It’s not a bug; it’s an undocumented feature. ― Anonymous", category: "Humor" },
    { text: "First, solve the problem. Then, write the code. – John Johnson", category: "Programming" },
    { text: "Code is like humor. When you have to explain it, it’s bad. – Cory House", category: "Facts" }
  ];
  
 // Function to display a random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  const quoteDisplay = document.getElementById('quoteDisplay');
  quoteDisplay.innerHTML = `<p>${quote.text}</p><p><em>${quote.category}</em></p>`;
}

// Function to add a new quote
function addQuote() {
  const newQuoteText = document.getElementById('newQuoteText').value;
  const newQuoteCategory = document.getElementById('newQuoteCategory').value;
  if (newQuoteText && newQuoteCategory) {
    quotes.push({ text: newQuoteText, category: newQuoteCategory });
    document.getElementById('newQuoteText').value = '';
    document.getElementById('newQuoteCategory').value = '';
    alert('New quote added successfully!');
  } else {
    alert('Please enter both quote text and category.');
  }
}

// Event listeners
document.getElementById('newQuote').addEventListener('click', showRandomQuote);
document.getElementById('addQuote').addEventListener('click', addQuote);v
  