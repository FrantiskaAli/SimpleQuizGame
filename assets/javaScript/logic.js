//define all variables that will be used in global scope.
const timerDisplay = document.getElementById('time');
const start = document.getElementById('start');
const startScreen = document.getElementById('start-screen')
const questionDiv = document.getElementById('questions');
let questionTitle = document.getElementById('question-title');
let divChoices = document.getElementById('choices');





//function to start timer on click event
function timer (amountofquestions) {
let secondsLeft = amountofquestions * 10;
setInterval(function(){
            secondsLeft--;
            timerDisplay.textContent = secondsLeft;
        if(secondsLeft === 0) {
        alert('You have run out of time! Try again')
       //if times reaches 0 alert that game is lost
       window.location.reload();//this line will refresh page if game is lost
        clearInterval(timerInterval);}

 },1000)};

timer(3)

//add click event for when start button is pressed and add function that will 
//display question and start the countdown
function displayQuestion () {
    startScreen.setAttribute('class','hide') //hides the start div
    questionDiv.setAttribute('class', 'visible') //shows the questiong
   //adds heading in form of the question
    questionTitle.textContent = questionsObject[0].question;
    //should set the answers into variables
    let answerOne = document.createElement('li');
    answerOne.innerText = questionsObject[0].answer[0]; 
    let answerTwo = document.createElement('li');
    answerTwo.innerText = questionsObject[0].answer[1];
    let answerThree = document.createElement('li');
    answerThree.innerText = questionsObject[0].answer[2];
    let answerFour = document.createElement('li');
    answerFour.innerText = questionsObject[0].answer[3];
    //this should display everything
    divChoices.append(answerOne, answerTwo, answerThree, answerFour)




}



//start.addEventListener('click', )


//if answer is correct => next question,
//else if answer is incorrect => timer - 10seconds and nex qustion



//on last question after click event stop the timer



//create input window that player can type in
//last displayed window to safe data on local storage
// together with what left on timer