//define all variables that will be used in global scope.
const timerDisplay = document.getElementById('time');






//function to start timer on click event
function timer (amountofquestions) {
let secondsLeft = amountofquestions * 10;
setInterval(function(){
            secondsLeft--;
            timerDisplay.textContent = secondsLeft;
        if(secondsLeft === 0) {
        alert('You have run out of time!')
        // Stops execution of action at set interval
        clearInterval(timerInterval);}

 },1000)}

timer(6)

//set up timer to count down 80secs
//if timer ===  0 alert 'sorry you lost completely'

//add click event for when start button is pressed and add function that will 
//display question and start the countdown


//if answer is correct => next question,
//else if answer is incorrect => timer - 10seconds and nex qustion



//on last question after click event stop the timer



//create input window that player can type in
//last displayed window to safe data on local storage
// together with what left on timer