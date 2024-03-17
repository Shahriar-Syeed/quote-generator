const quoteContiner = document.getElementById('qouteContainer');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('newQuote');
const loader = document.getElementById('loader');
let apiQuotes;

// Shoe Loading

function loading(){
  loader.hidden = false;
  quoteContiner.hidden = true;
}

// Hide loading
function complete(){
  quoteContiner.hidden=false;
  loader.hidden=true;
}

// Show New Quote
function nwQuote(){
  // Pick a Random Quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // check if author field is balnk and replace it with 'Unknown'

  if(!quote.author){
    authorText.textContent='Unknown';
  } else{
    authorText.textContent = quote.author;
  }

  if(quote.text.length > 40){
    quoteText.classList.add('long-quote');
  }else{
    quoteText.classList.remove('long-quote');
  }

  //  Check Quote length to determine styling

//  Set Quote, Hide Loader
  quoteText.textContent = quote.text;
  complete();

}

// Get Quote From API
async function getQuotes(){
  loading();
 const apiUrl = 'https://type.fit/api/quotes';
// const proxyUrl ='https://cors-anywhere.herokuapp.com/';
  // const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
 
 try {
  const resp = await fetch(apiUrl);
  // const resp = await fetch(proxyUrl + apiUrl);
  console.log(resp);
  apiQuotes = await resp.json();
  // console.log(apiQuotes);
  // console.log(apiQuotes[12]);
  nwQuote();
 } catch(error){
  // getQuotes();
  // catch Error Here
  // alert(error);
  console.log('woops! no quote!', error);
 }
}


// On Load

getQuotes();
// loading();

// // Local Quote

// function nwQuote() {
//   // Pick a Random Quote from apiQuotes array
//   const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//   console.log(quote);
  
// }
// nwQuote();

// tweet Quote

function tweetQuote() {
  loading();
  const twitterUrl= `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

// Event Listener
newQuoteBtn.addEventListener('click', nwQuote);
twitterBtn.addEventListener('click', tweetQuote);