winLooseLBL=document.getElementById("winlose")
var winnerImg=document.querySelector(".winimg")

function isNumeric(number) {
    var results = !isNaN(parseFloat(number) && isFinite(number))
    return results
}
document.getElementById("start").onclick=function(){
    console.log("old ben")

    var range=""
while(!isNumeric(range)){
    range = prompt("Set boundaries zero to ...?")
}

var answer = Math.floor(Math.random()*range+1)
console.log(answer)

var guess = parseInt(prompt(`Guess a number between 0 and ${range}? `))
while(guess!=answer){
    if (guess < answer) {
        // console.log("guess higher")
        alert("guess higher")
    }
    else if (answer < guess) {
        // console.log("guess lower")
        alert("guess lower")
    }   
    guess = parseInt(prompt(`Guess a number between 0 and ${range}? `))
}
    winLooseLBL.innerHTML="You got it"
// console.log("you got it")
winnerImg.computedStyleMap.display="block"
}