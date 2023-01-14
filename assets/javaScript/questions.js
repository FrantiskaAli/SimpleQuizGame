//this array contains all my question stored like an object
//together with answer options
//you can add any object question is made to expand easily
const questionsObject =[ {   //object array
    question: "What does JavaScript do?", //question
    answer: { //answers
            a: "only style the html file", 
            b: "adds logic and makes website interactive", 
            c: "is the most basic programming language", 
            d: "I dont know" }, 
            //i put correct anser in the object so I can compare
    correctAnswer: "adds logic and makes website interactive",
}, { 
    question: "What are JS loops used for?",
    answer: {
        a: "to save data on local storage", 
        b:  "to create element in DOM", 
        c:  "to iterate over anArrays",
        d:  "for hanging"},
    correctAnswer: "to iterate over anArrays",
}, { 
    question: "What is DOM in JavaScript?",
    answer: {
        a: "Very dominant partner", 
        b:  "house", 
        c:  "short for Dominic",
        d:  "Document Object Model"},
    correctAnswer: "Document Object Model",
},{ 
    question: "How to add element to an array",
    answer: {
        a: "Array.add(element)", 
        b:  "Element.Array(add)", 
        c:  "Array.push(element)",
        d:  "Arrray + element"},
    correctAnswer: "Array.push(element)",
},{ 
    question: "What does JSON mean",
    answer: {
        a: "Java Script Optimal Nodes", 
        b:  "JavaScript Object Notation", 
        c:  "JavaScript Orientation Name",
        d:  "JavaScript Object Navigation"},
    correctAnswer: "JavaScript Object Notation",
},{ 
    question: "What can we create Array of",
    answer: {
        a: "strings", 
        b:  "numbers", 
        c:  "objects",
        d:  'all of the above'},
    correctAnswer: 'all of the above',
},{ 
    question: "did you like the quiz?",
    answer: {
        a: "Loved It!", 
        b:  "Its working but questions sucks", 
        c:  "Hated it",
        d:  "I dont care, I am here to grade"},
    correctAnswer: "Its working but questions sucks",
},]
