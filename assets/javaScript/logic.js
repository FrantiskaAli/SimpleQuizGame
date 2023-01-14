//define all variables that will be used in global scope.
//I tried to name them so they are sefl explanatory
const timerDisplay = document.getElementById('time');
const start = document.getElementById('start');
const startScreen = document.getElementById('start-screen')
const questionDiv = document.getElementById('questions');
const endScreen = document.getElementById('end-screen');
const wrongSound = document.getElementById('wrong-sound');
const goodSound = document.getElementById('correct-sound');
const saveScore = document.getElementById('submit');
let questionTitle = document.getElementById('question-title');
let divChoices = document.getElementById('choices');
let finalScore = document.getElementById('final-score');
let stopTimer = false //will need this to stop the timer if function the end is calles
let score = 6 * 10;; //score tracker
let order = 0; //questions order
let mistake = false
//creating questions layout
let  allAnswersList = document.createElement('ol');
divChoices.appendChild(allAnswersList)
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
allAnswersList.append(answerOne, answerTwo, answerThree, answerFour);

//function after clicking start
start.addEventListener('click', function(){
    timer();
    startScreen.setAttribute('class','hide') //hides the start div
    questionDiv.setAttribute('class', 'visible') //shows the questiong
    displayQuestion(order)

})
//function to start timer on click event
function timer () {

let timerInterval = setInterval(function(){
            score--;
            timerDisplay.textContent = score;
        if(score < 0) {
        alert('You have run out of time! Try again')
       //if times reaches 0 alert that game is lost
       window.location.reload();//this line will refresh page if game is lost
        clearInterval(timerInterval);
        }
         else if (stopTimer === true) {//thisvariable was made earlier so I can easily stop timer in any other part of code
            clearInterval(timerInterval);
            
        } 
score;//will save seconds left into variable which is available globaly
 },1000)};

 function displayQuestion(order){//this function displays questions
  if(order > questionsObject.length -1){
    theEnd()//if you have answered all the questions, end screen will show
  }else{
  
  questionTitle.textContent = questionsObject[order].question; //adding text in question heading
    //answer1
    let answerButtonA = document.createElement('button')
   answerButtonA.innerText = questionsObject[order].answer.a; 
   answerOne.appendChild(answerButtonA);//this block of code created  button with answer written on it

    //answer 2
    let answerButtonB = document.createElement('button')
    answerButtonB.innerText = questionsObject[order].answer.b;
    answerTwo.appendChild(answerButtonB)

    //answer 3
    let answerButtonC = document.createElement('button');
    answerButtonC.innerText = questionsObject[order].answer.c;
    answerThree.appendChild(answerButtonC)

    // answer 4
    let answerButtonD = document.createElement('button');
    answerButtonD.innerText = questionsObject[order].answer.d;
    answerFour.appendChild(answerButtonD) 
  }
 }

//after click logic - Ifound this code on stack overflow, I dont know about nodeNames yet
divChoices.addEventListener('click', function (event) {
  const isButton = event.target;
  if (!isButton) {
    return;
  } else{
    let clicked = event.target
    let text = clicked.innerText
  if(text === questionsObject[order].correctAnswer){
    //console.log('correct');
    order += 1;
    deleteOld()
    displayQuestion(order)
    goodSound.play()
  } else {
    score -=10;
    order +=1;
    //console.log('notgood')
    deleteOld()
    displayQuestion(order)
    wrongSound.play()
    }
  }
})
   
 function deleteOld() {
  //this function is pretty self explanatory, clears the buttons
  
  allAnswersList.children[0].innerHTML = "";
  allAnswersList.children[1].innerHTML = "";
  allAnswersList.children[2].innerHTML = "";
  allAnswersList.children[3].innerHTML = "";
}

function theEnd(){
  //this function displays the final screen
    stopTimer = true; //stops the timer
    questionDiv.setAttribute('class', 'hide');//hides questions
    endScreen.setAttribute('class','visible');//shows the end screen
    finalScore.innerText = score - 1 ;//timer was is still countin one sec after last question so i adjust it so timer and score is the same ,if someone wanna check
}
let leadersArray = JSON.parse(localStorage.getItem('leaders') || "[]");
//creates array into whitch scores and initials will be pushed
saveScore.addEventListener('click', function(event){
  event.preventDefault;//stops submit from doing whatever it woulc in html alone

//this whole block basically just accesses local storage and reassamble array of objects
//then it will push new object in the array
//then it stringifies the arrays object,so it can be stored on local storage

  let initials = document.getElementById('initials').value.trim();
  if(initials.length > 3){
    alert('Please only use initials, max 3 characters')
    initials = ''
  } else {
let leaderBoardObject = {
  name: initials,
  points: score, 
} 
//let oldScores = localStorage.getItem('leaders');
//leadersArray.push(JSON.parse(JSON.parse(oldScores)));
leadersArray.push({name: initials, points: score});
localStorage.setItem('leaders', JSON.stringify(leadersArray));

//this should send us to highscores
location.href = "highscores.html";}
})