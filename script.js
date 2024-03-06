let apiQuotes;

// Get Quote From API
async function getQuotes(){
 const apiUrl = 'https://type.fit/api/quotes';
 try {
  const resp = fetch(apiUrl);
  console.log(resp);
  apiQuotes = await resp.json();
  console.log(apiQuotes);
 } catch(error){
  // catch Error Here
  // alert(error);
 }
}


// On Load

getQuotes();