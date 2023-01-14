//getting scores from local storage
let oldScores = localStorage.getItem('leaders');
//moving it back to an object
oldScores = JSON.parse(JSON.parse(oldScores));

console.log(oldScores);

//declearing variables to be used and creating list of leaders
//each variable named after order it will be in
const highScores = document.getElementById('highscores')
let first = document.createElement('li')
let second = document.createElement('li');
let third = document.createElement('li');
let fourth = document.createElement('li');
let fifth = document.createElement('li');



highScores.append(first, second, third, fourth, fifth);

let sortedOldScores = oldScores[0].sort((a, b) => a.points - b.points)
//sorting highscores
console.log(oldScores.sort((a, b) => b.points - a.points))

//highscores in correctorder to be logged in the leader board

first.innerText = sortedOldScores[0].points
first.innerText += sortedOldScores[0].name

second.innerText = sortedOldScores[1].points;
//third.innerText = sortedOldScores[2].points;
//fourth.innerText = sortedOldScores[3].points;
//fifth.innerText = sortedOldScores[4].points;

//i need to connect the arrays of the newly pushed and the old ones