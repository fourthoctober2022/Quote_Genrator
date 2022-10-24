let apiQuotes=[];

//Show New Quote
function newQuote(){
//pick a random quote  from apiQuotes array
const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
console.log(quote);
}


//get Quotes from API
async function getQuotes(){
    const apiUrl="https://type.fit/api/quotes";
    try{
        const response = await fetch(apiUrl);
        apiQuotes= await response.json();
        // console.log(apiQuotes);
        newQuote();
    } catch(error){
        //Catch Error Here
    }
}
// On Load
getQuotes();



// //its for the local if you dont want to do through api
// function newQuote(){
//     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//      console.log(quote);
// }
// newQuote();