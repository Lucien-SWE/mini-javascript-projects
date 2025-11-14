const inputBtn = document.getElementById("input-button");
const log = document.getElementById("log");
let outputValue = 0;

inputBtn.addEventListener("click", function(){
    let inputValue = prompt("Enter a number to double it!");
    log.innerText = doublenum(parseFloat(inputValue));
});

function doublenum(x){
    return x + x;
};

