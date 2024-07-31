"use strict"

let btn = document.querySelector('#btn');
let messages = document.querySelector('.messages');
let score = document.querySelector('.score');
let highScore = document.querySelector('.high-score'); 
let mainChild = document.querySelector('.main-child');

// score.innerHTML = '20';
let scores = parseFloat(score.innerHTML);

let input = document.getElementById('input');
let generateNumber = Math.floor(Math.random()*20)+1;
let highScoreData = localStorage.getItem('high score data' ,JSON.parse(scores) ) || 0;
console.log(highScoreData)
highScore.innerHTML = highScoreData

btn.addEventListener('click',function(){
    var inputValue2 = parseFloat(input.value);
    console.log(inputValue2)
    console.log(generateNumber);

    
    if(inputValue2 > generateNumber){
        // let any = scores--;
        // console.log(any, 'any')
        // score.innerHTML = any;
      scores--
      score.innerHTML = scores 
      messages.innerHTML = 'to high';
      //    score.innerHTML = score - 1;
    }else if(inputValue2 < generateNumber){
        messages.innerHTML = 'to low'
        scores--
        score.innerHTML = scores 
    }else if(inputValue2 === generateNumber){
        mainChild.style.backgroundColor = 'green';
        messages.innerHTML = 'u win'
        btn.disabled = true;
        localStorage.setItem('high score data' , JSON.stringify(scores))
        highScore.innerHTML = scores
    }

})
// function getInputValue() {
//     // Get the input element by its ID
//     var inputElement = document.getElementById('input');
    
//     // Get the value of the input element
//     var inputValue = inputElement.value;
    
//     // Log the value to the console
//     console.log(inputValue);
// }

let again = document.querySelector('.btn').addEventListener('click',function(){
    location.reload()
})