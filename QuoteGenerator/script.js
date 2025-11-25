const quote = document.querySelector(".quote");
const quoteButton = document.querySelector(".quote-btn");
const quoteList = ["Quote1", "Quote2", "Quote3", "Quote4", "Quote5"];

let previousIndex;
let newIndex;

function randomQuote(list){
    let index = Math.floor(Math.random() * list.length);
    return list[index];
}

quoteButton.addEventListener("click", function(){
    quote.textContent = randomQuote(quoteList);
});