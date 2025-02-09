const quotes = [
  {
    quote: "Time and tide wait for no man.",
    author: "Geoffrey Chaucer",
  },
  {
    quote: "Life is what happens when you’re busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "Lost time is never found again.",
    author: "Benjamin Franklin",
  },
  {
    quote: "The two most powerful warriors are patience and time.",
    author: "Leo Tolstoy",
  },
  {
    quote:
      "In three words I can sum up everything I’ve learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote: "The bad news is time flies. The good news is you’re the pilot.",
    author: "Michael Altshuler",
  },
  {
    quote: "Time is the most valuable thing a man can spend.",
    author: "Theophrastus",
  },
  { quote: "You may delay, but time will not.", author: "Benjamin Franklin" },
  {
    quote: "Life isn’t about finding yourself. It’s about creating yourself.",
    author: "George Bernard Shaw",
  },
  {
    quote: "Time is what we want most, but what we use worst.",
    author: "William Penn",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
