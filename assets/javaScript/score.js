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



highScores.appendChild(first);
highScores.appendChild(second);
highScores.appendChild(third);
highScores.appendChild(fourth);
highScores.appendChild(fifth);


leadersArray.sort((a, b) => b.points - a.points)

console.log(leadersArray)
const arrayOfPosition = [first, second, third, fourth, fifth]
//highscores in correctorder to be logged in the leader board
for (let i =0; i < leadersArray.length; i++ ){
if(leadersArray && leadersArray[i].points){
    arrayOfPosition[i].innerText =`${leadersArray[i].points} points earned by ${leadersArray[i].name}`
    
} 

}
//clearing local storage on button clear Highscores
clear.addEventListener('click', function (){
   let ask =  confirm('Do you wish to remove all the scores?')
   if (ask){
    localStorage.clear();
    window.location.reload();//this will reload the page after clearing the scores
   }
    
});