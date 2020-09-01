const { quotes } = require('./db');

function generateRandomQuote (quotes) {
  const idToShow = Math.floor(Math.random() * 10);
  const { quote } = quotes.find(q => q.id === idToShow )
  console.log(quote);
}

generateRandomQuote(quotes);