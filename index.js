//Problem 1
var userInput = "";

while (userInput !== 'q'){
    userInput = prompt("Please enter a word. Press 'q' to quit.");
}

//Problem 2
var anyString = ["ANY", "wOrd", "heRE"];
var lowerCaseString = anyString.map(function(element){
    return element.toLowerCase();
});
console.log(lowerCaseString);

//Challenge
var studentArray = [1];
var newStudentArray = [];

class Student{
    constructor(name){
        this.name = name;
    }
}

var newStudent = new Student("Andrew");

newStudentArray = studentArray.map(function(element){
    return newStudent
});

console.log(newStudentArray);