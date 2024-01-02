let paper = document.querySelector(".div1");
let value;
let msg = document.querySelector(".msg");

paper.addEventListener("click", () => {
    value = "paper";
    check();
});

let stone = document.querySelector(".div2"); // Corrected selector
stone.addEventListener("click", () => {
    value = "stone";
    check();
});

let scissor = document.querySelector(".div3"); // Corrected selector
scissor.addEventListener("click", () => {
    value = "scissor";
    check();
});

// Rest of your code...


var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "stone";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissor";
}
function check(){
    if(value=="stone" && computerChoice=="paper"){
    msg.innerText="Computer Won";
console.log("ABCD");}
else if(value=="stone" && computerChoice=="stone"){
msg.innerText="Draw";
console.log("ABCD");}
else if(value=="stone" && computerChoice=="scissor"){
msg.innerText="Congrats! You Won";
console.log("ABCD");}
else if(value=="paper" && computerChoice=="stone"){
msg.innerText="Congrats! You Won";
console.log("ABCD");}
else if(value=="paper" && computerChoice=="paper"){
msg.innerText="Draw";
console.log("ABCD");}
else if(value=="paper" && computerChoice=="scissor"){
msg.innerText="Computer Won";
console.log("ABCD");}
else if(value=="scissor" && computerChoice=="stone"){
msg.innerText="Computer Won";
    console.log("ABCD");}
else if(value=="scissor" && computerChoice=="paper"){
msg.innerText="Congrats! You Won";
console.log("ABCD");}
else{
msg.innerText="Draw";
console.log("ABCD");}

}

