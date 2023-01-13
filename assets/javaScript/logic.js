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

timer(3)

//add click event for when start button is pressed and add function that will 
//display question and start the countdown
function displayQuestion (quest) {
    startScreen.setAttribute('class','hide') //hides the start div
    questionDiv.setAttribute('class', 'visible') //shows the questiong
   //adds heading in form of the question
    questionTitle.textContent = questionsObject[quest].question;
    //should set the answers into variables
    let answerOne = document.createElement('li');
    let answerTwo = document.createElement('li');
    let answerThree = document.createElement('li');
    let answerFour = document.createElement('li');
    //this will create list
    divChoices.append(answerOne, answerTwo, answerThree, answerFour);
    //this will add answer button into each listed item
    //button 1
    let answOneBtn = document.createElement('button');
    answOneBtn.innerText = questionsObject[quest].answer[0]; 
    answerOne.appendChild(answOneBtn);
    //button 2
    let answTwoBtn = document.createElement('button');
    answTwoBtn.innerText = questionsObject[quest].answer[1];
    answerTwo.appendChild(answTwoBtn);
    //button 3
    let answThreeBtn = document.createElement('button');
    answThreeBtn.innerText = questionsObject[quest].answer[2];
    answerThree.appendChild(answThreeBtn);
    // button 4
    let answFourBtn = document.createElement('button');
    answFourBtn.innerText = questionsObject[quest].answer[3];
    answerFour.appendChild(answFourBtn);
}



//start.addEventListener('click', )


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