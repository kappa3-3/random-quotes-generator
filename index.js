import quotes from './db';
const button = document.getElementById('button');

function generateRandomQuote (quotes) {
  const idToShow = Math.floor(Math.random() * 10);
  const { quote } = quotes.find(q => q.id === idToShow )
  const container = document.getElementById('quote')
  container.innerHTML= quote;
}

button.addEventListener('click', () => generateRandomQuote(quotes));
