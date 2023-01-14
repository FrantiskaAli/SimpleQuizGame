//define all variables that will be used in global scope.
const timerDisplay = document.getElementById('time');
const start = document.getElementById('start');
const startScreen = document.getElementById('start-screen')
const questionDiv = document.getElementById('questions');
const endScreen = document.getElementById('end-screen');
const wrongSound = document.getElementById('wrong-sound');
const goodSound = document.getElementById('correct-sound')



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
         else if (stopTimer === true) {
            clearInterval(timerInterval);
            
        } 
score;//will save seconds left into variable which is available globaly
 },1000)};




 function displayQuestion(order){
  if(order > questionsObject.length -1){
    theEnd()
  }else{
  
  questionTitle.textContent = questionsObject[order].question;
    //answer1
    let answerButtonA = document.createElement('button')
   answerButtonA.innerText = questionsObject[order].answer.a; 
   answerOne.appendChild(answerButtonA);

   answerButtonA.addEventListener('click', function(event){
    let clicked = event.target
    let text = clicked.innerText
  if(text === questionsObject[order].correctAnswer){
    console.log('correct');
    order += 1;
    deleteOld()
    displayQuestion(order)
    goodSound.play()
  } else {
    order +=1;
     score -=10; 
    console.log('notgood')
    deleteOld()
    displayQuestion(order)
    wrongSound.play()
    }
 
})

    //answer 2
    let answerButtonB = document.createElement('button')
    answerButtonB.innerText = questionsObject[order].answer.b;
    answerTwo.appendChild(answerButtonB)
//after click
answerButtonB.addEventListener('click', function(event){
  let clicked = event.target
  let text = clicked.innerText
if(text === questionsObject[order].correctAnswer){
  console.log('correct');
  order += 1;
  deleteOld()
  displayQuestion(order)
  goodSound.play()
} else {
  order +=1;
   score -=10; 
  console.log('notgood')
  deleteOld()
  displayQuestion(order)
  wrongSound.play()
  }

})

    //answer 3
    let answerButtonC = document.createElement('button');
    answerButtonC.innerText = questionsObject[order].answer.c;
    answerThree.appendChild(answerButtonC)
//after cick
answerButtonC.addEventListener('click', function(event){
  let clicked = event.target
  let text = clicked.innerText
if(text === questionsObject[order].correctAnswer){
  console.log('correct');
  order += 1;
  deleteOld()
  displayQuestion(order)
  goodSound.play()
} else {
  order +=1;
  score -=10;
  console.log('notgood')
  deleteOld()
  displayQuestion(order)
  wrongSound.play()
  }

})
    // answer 4
    let answerButtonD = document.createElement('button');
    answerButtonD.innerText = questionsObject[order].answer.d;
    answerFour.appendChild(answerButtonD)
//after click
answerButtonD.addEventListener('click', function(event){
  let clicked = event.target
  let text = clicked.innerText
if(text === questionsObject[order].correctAnswer){
  console.log('correct');
  order += 1;
  deleteOld()
  displayQuestion(order)
  goodSound.play()
} else {
  order +=1;
  score -=10;
  console.log('notgood')
  deleteOld()
  displayQuestion(order)
  wrongSound.play()
  }

})
//after click logic
   



  }
 }






    
 function deleteOld() {
  
  allAnswersList.children[0].innerHTML = "";
  allAnswersList.children[1].innerHTML = "";
  allAnswersList.children[2].innerHTML = "";
  allAnswersList.children[3].innerHTML = "";
}






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
    finalScore.innerText = score - 1 ;

}


//create input window that player can type in
//last displayed window to safe data on local storage
// together with what left on timer



