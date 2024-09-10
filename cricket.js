let randamnumber;
let computerchoice;
let value;
let output;
let scorestr = localStorage.getItem('score');
// if(scorestr !== undefined){
//     score = JSON.parse(scorestr);
// }else{
let score = JSON.parse(scorestr) || {
    won:0,
    loss:0,
    tie:0,
   };
// }
function computermovement() {
    computerchoice;
    randamnumber = Math.random()*3;
    if (randamnumber >0 && randamnumber <= 1) {
    computerchoice = 'Bat';
    }else if(randamnumber >1 && randamnumber <=2){
    computerchoice = 'Ball';
    }else if(randamnumber >2 && randamnumber <=3){
    computerchoice ='Stump';
    }    
   };
 function compair(value) {
    value;
    output;
    if (value === 'Bat') {
        if (computerchoice === value) {
            score.tie++;
            output = 'Match tie';
           }else if(computerchoice === 'Ball'){
            score.won++;
            output = 'congratulation you have won';
           }else{
            score.loss++;
            output = 'computer won';
           }
    }else if(value === 'Ball'){
        if (computerchoice === value) {
            score.tie++;
            output = 'Match tie';
           }else if(computerchoice === 'Stump'){
            score.won++;
            output = 'congratulation you have won';
           }else if(computerchoice === 'Bat'){
            score.loss++;
            output = 'computer won';
           }
    }else if(value === 'Stump'){
        if (computerchoice === value) {
            score.tie++;
            output = 'Match tie';
           }else if(computerchoice === 'Bat'){
            score.won++;
            output = 'congratulation you have won';
           }else{
            score.loss++;
            output = 'computer won';
           }
       }  
    };
 function result(value) {
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('#userMove').innerHTML = (value !== undefined ? `you have a chosen ${value}`:'');
    document.querySelector('#computerMove').innerHTML =(value !== undefined ?  `computer choice is ${computerchoice}`:'');
    document.querySelector('#result').innerHTML =value !== undefined ?  output :'';
    document.querySelector('#score').innerHTML = (`Score:- Won:${score.won}, Loss:${score.loss}, tie:${score.tie}`);
   };
 function restore() {
    localStorage.clear()
    score = {
        won: 0,
        loss: 0,
        tie: 0,
    }
    result();
   }
