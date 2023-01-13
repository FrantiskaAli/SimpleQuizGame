//define all variables that will be used in global scope.
const timerDisplay = document.getElementById('time');
const start = document.getElementById('start');
const startScreen = document.getElementById('start-screen')
const questionDiv = document.getElementById('questions');
const endScreen = document.getElementById('end-screen');

let questionTitle = document.getElementById('question-title');
let divChoices = document.getElementById('choices');
let finalScore = document.getElementById('final-score');
let stopTimer = false //will need this to stop the timer if function the end is calles
let score = 0; //score tracker
let order = 0; //questions order



//creating questions layout
let answerOne = document.createElement('li');
let answerTwo = document.createElement('li');
let answerThree = document.createElement('li');
let answerFour = document.createElement('li');
    //sets same class for all the answers for easier manipulation
    answerOne.setAttribute('class', 'answers');
    answerTwo.setAttribute('class', 'answers');
    answerThree.setAttribute('class', 'answers');
    answerFour.setAttribute('class', 'answers');
//this will create actual list
divChoices.append(answerOne, answerTwo, answerThree, answerFour);



//function after clicking start
start.addEventListener('click', function(){
    timer(questionsObject.length);
    startScreen.setAttribute('class','hide') //hides the start div
    questionDiv.setAttribute('class', 'visible') //shows the questiong
    displayQuestion(order)

})


//function to start timer on click event
function timer (amountofquestions) {
let secondsLeft = amountofquestions * 10;
let timerInterval = setInterval(function(){
            secondsLeft--;
            timerDisplay.textContent = secondsLeft;
        if(secondsLeft === 0) {
        alert('You have run out of time! Try again')
       //if times reaches 0 alert that game is lost
       window.location.reload();//this line will refresh page if game is lost
        clearInterval(timerInterval);
        } else if (stopTimer === true) {
            clearInterval(timerInterval);
            
        } 
score = secondsLeft;//will save seconds left into variable which is available globaly
 },1000)};




 function displayQuestion(order){
  
    questionTitle.textContent = questionsObject[order].question;
    //answer1
    
   answerOne.innerText = questionsObject[order].answer[0]; 
   answerOne.addEventListener('click', function(event){
    let clicked = event.target
    let text = clicked.textContent;
   console.log(event.target)
    if(!questionsObject[order].question){
        console.log('correct')
     theEnd();
     return
    }
    else if (text === questionsObject[order].correctAnswer){
       console.log('correct')
       displayQuestion(order);
    } else {
        console.log('incorrect')
        score -= 10;
      displayQuestion(order) }


})
    //answer 2
    
    answerTwo.innerText = questionsObject[order].answer[1];
    
    //answer 3
    
    answerThree.innerText = questionsObject[order].answer[2];
   
    // answer 4
    
    answerFour.innerText = questionsObject[order].answer[3];}









    



//for (i of clickable) {
  //  (function(i) {
    //  i.addEventListener('click', function() {
        
      //  if (quest + 1 === undefined){ //this should check that there is next question in object, otherwise star the end.
        //    theEnd();
            //under is to check if the answer is correct
          // } else if(questionsObject[quest].answer[0]  === questionsObject[quest].correctAnswer){
            //displayQuestion (quest +1)} else {
              //  score -= 10;
                //displayQuestion (quest +1)
            //}
     // });
   // })(i);
  //}
    
//};



//start.addEventListener('click', )

//aadevent listener for changing questions 




//if answer is correct => next question,
//else if answer is incorrect => timer - 10seconds and nex qustion



//on last question after click event stop the timer
function theEnd(){
    stopTimer = true;
    startScreen.setAttribute('class','hide');
    questionDiv.setAttribute('class', 'hide');
    endScreen.setAttribute('class','visible');
    finalScore.innerText = score;

}


//create input window that player can type in
//last displayed window to safe data on local storage
// together with what left on timer



