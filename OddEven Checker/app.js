const inputBtn = document.getElementById("input-button");
const outputVal = document.getElementById("output");


inputBtn.addEventListener("click", function(){
    let userInput = prompt("What number should I check?");
    let answer = oddEven(userInput);

    outputVal.innerText = answer;
});

function oddEven(x){
    let check = x / 2;
    let check2 = Number.isInteger(check);

    if (check2 == true){
        return "Even"
    }
    else {
        return "Odd"
    };
}