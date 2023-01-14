//getting scores from local storage
const leadersArray = JSON.parse(localStorage.getItem('leaders') || "[]");
const clear = document.getElementById('clear');
//moving it back to an object


console.log(leadersArray);

//declearing variables to be used and creating list of leaders
//each variable named after order it will be in
const highScores = document.getElementById('highscores')
let first = document.createElement('li')
let second = document.createElement('li');
let third = document.createElement('li');
let fourth = document.createElement('li');
let fifth = document.createElement('li');



highScores.append(first, second, third, fourth, fifth);

leadersArray.sort((a, b) => b.points - a.points)

console.log(leadersArray)
const arrayOfPosition = [first, second, third, fourth, fifth]
//highscores in correctorder to be logged in the leader board
for (let i =0; i < arrayOfPosition.length; i++ ){
if(leadersArray && leadersArray.points){
    arrayOfPosition[i].innerText =`${leadersArray[i].points} points earned by ${leadersArray[i].name}`
    
} else {
    arrayOfPosition[i].innerText = `No high score achived yet.`   
}


}
//first.innerText = `${leadersArray[0].points} points earned by ${leadersArray[0].name}`;
//second.innerText = `${leadersArray[1].points} points earned by ${leadersArray[1].name}`;;
//third.innerText = `${leadersArray[2].points} points earned by ${leadersArray[2].name}`;
//fourth.innerText = `${leadersArray[3].points} points earned by ${leadersArray[3].name}`;
//fifth.innerText = `${leadersArray[4].points}  points earned by ${leadersArray[4].name}`;

//clearing local storage on button clear Highscores
clear.addEventListener('click', function (){
   let ask =  confirm('Do you wish to remove all the scores?')
   if (ask){
    localStorage.clear()
   }
    
});