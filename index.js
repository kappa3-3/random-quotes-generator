const button = document.getElementById('button');

const quotes = [
  { 
    id: 1,
    name: 'Levy',
    quote: 'Funny you should ask that!'
  },
  { 
    id: 2,
    name: 'Levy',
    quote: 'Let me stop you right there...'
  },
  { 
    id: 3,
    name: 'Levy',
    quote: 'I will ignore that'
  },
  { 
    id: 4,
    name: 'Levy',
    quote: 'crickets...'
  },
  { 
    id: 5,
    name: 'Levy',
    quote: 'What\'s going on?'
  },
  { 
    id: 6,
    name: 'Levy',
    quote: 'Did you read the readme?'
  },
  { 
    id: 7,
    name: 'Levy',
    quote: 'What do you mean?'
  },
  { 
    id: 8,
    name: 'Levy',
    quote: 'Specificity'
  },
  { 
    id: 9,
    name: 'Levy',
    quote: 'I\'m gonna leave you to it'
  },
  { 
    id: 10,
    name: 'Levy',
    quote: 'Is anyone missing?'
  },
  { 
    id: 11,
    name: 'Levy',
    quote: 'Did you completely break Kasia?'
  },
  { 
    id: 12,
    name: 'Levy',
    quote: '... and complete silence'
  },
  { 
    id: 13,
    name: 'Levy',
    quote: 'Wait... WHAT?'
  },
];


function generateRandomQuote (quotes) {
  const idToShow = Math.ceil(Math.random() * 13);
  console.log(idToShow)
  const { quote } = quotes.find(q => q.id === idToShow )
  const container = document.getElementById('quote')
  container.innerHTML= quote;
}

button.addEventListener('click', () => generateRandomQuote(quotes));
