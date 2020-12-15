Problem 0A

Fluffy sorry, Fluffyy is my fav cat and it has 2 catFriends
Write a code to get the below details of Fluffyy so that
I can take him to vet.


// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

var cat = {
    name: 'fluffy',
    activities: ['play','eat cat food'], 
    catFriends :[{
        name: 'bar',
        activities: ['be grumpy','eat bread omlet'],
        weight:'8',
        furcolor: 'white'
    },
    {
        name : 'foo',
        activities : ['sleep','pre-sleep naps'],
        weight : '4'
    }
]};
   console.log(cat); 
   
   cat.height='8';//Add height and weight to Fluffy
   cat.weight='20';//Add height and weight to Fluffy
   cat.name='Fluffyy';//Fluffy name is spelled wrongly. Update it to Fluffyy
   console.log(cat);
   console.log(cat.catFriends[0].activities.concat(cat.catFriends[1].activities));//List all the activities of Fluffyy’s catFriends.
   console.log(cat.catFriends[0].name+ ',' +(cat.catFriends[1].name));//Print the catFriends names.
   console.log(cat.catFriends[0].weight + cat.catFriends[1].weight);//Print the total weight of catFriends
   console.log(cat.activities.concat(catFriends[0].activities).concat(cat.catFriends[1].activities));Print the total activities of all cats (op:6)
    cat.catFriends[0].activities.push['food hunting'];//Add 2 more activities to bar & foo cats
    cat.catFriends[0].activities.push['playing'];//Add 2 more activities to bar & foo cats
    cat.catFriends[1].activities.push['running'];//Add 2 more activities to bar & foo cats
    cat.catFriends[1].activities.push['sleeping'];//Add 2 more activities to bar & foo cats
    
    console.log(cat.catFriends[0].activities, cat.catFriends[1].activities);
    
    cat.catFriends[0].furcolor='Black';//Update the fur color of bar
    console.log(cat.catFriends[0]);

  //end-here
});

//////////////**********************************************************/////////////////

Problem 0B


Write a function called “printAllValues” which returns an newArray of all the input object’s values.

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

var obj = {name:'Rajnikanth', age : 33, haspets : false}

function printAllValues(obj){
    return Object.values(obj);
}
var res=printAllValues(obj);
console.log(res);

  //end-here
});

Problem 2 : 

Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
Example Input:
{name : ‘RajiniKanth’, age : 25, hasPets : true}
Example Output:
[‘name’, ‘age’, ‘hasPets’]


Problem 1:


// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

var obj = {name:'Rajnikanth', age : 33, haspets : false}

function printAllValues(obj){
    return Object.keys(obj);
}
var res=printAllValues(obj);
console.log(res);

  //end-here
});


Problem 3:


// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

var obj = {name: 'ISRO', age: 35, role: 'Scientist'};

function convertObjectToList(obj){
    return Object.entries(obj);
}
var res=convertObjectToList(obj);
console.log(res);

  //end-here
});

Problem 4 :

Parsing a list of lists and convert into a JSON object:
Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
Input (Array):
var array = [[“make”, “Ford”], [“model”, “Mustang”], [“year”, 1964]];
Output:
var object = {
make : “Ford”
model : “Mustang”,
year : 1964
}



// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

function fromListToObject() {
  var object = {}; // out of the loop
  for (var i = 0; i < array.length; ++i) { // iterate to last
    var newArray = array[i];
    object[newArray[0]] = newArray[1];
  }
  return object; // out of the loop
}

var obj = fromListToObject(array);

console.log(obj);  //end-here
});

Problem 6 :
var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
    
 var tranformEmployeeList = [];

 for(let j=0;j<arr.length;j++){
      let newObject = {};

     for(let i=0;i<arr[j].length;i++){
        let key = arr[j][i][0];
        let value = arr[j][i][1];
        newObject[key] = value;
    }
    tranformEmployeeList.push(newObject)
 }
  return tranformEmployeeList;
}
console.log(transformEmployeeData(arr))

************************************************************************

Problem 7 :

/*var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6};
if(JSON.stringify(expected)===JSON.stringify(actual)){
    console.log('equal');
}
else
{
    console.log('not equal');
}
*/

function demo(actual,expected){
    expected = {foo: 5, bar: 6};
    actual = {foo: 5, bar: 6};
if(JSON.stringify(expected)===JSON.stringify(actual)){
    console.log('equal');
}
else
{
    console.log('not equal');
}
}

*******************************************************************************
problem 8:

var securityQuestions = [
 {
 question: "What was your first pet’s name?",
 expectedAnswer: "FlufferNutter"
 },
 {
 question: "What was the model year of your first car?",
 expectedAnswer: "1985"
 },
 {
 question: "What city were you born in?",
 expectedAnswer: "NYC"
 }
];

function demo(ques, ans){
    for(let i in securityQuestions){
       if(securityQuestions[i].question == ques &&
        securityQuestions[i].expectedAnswer == ans){
            return true;
        } 
        else
        {
            return false;
        }
   }

}
var res=demo(ques, ans);
console.log(res);
*****************************************************************************

Problem 9:

var students = [
 {
 name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
 {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
 {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
 {name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
 {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
 {name: "Devdas",age: 56} 
 ];
function returnMinors(students){
    var output=[];
    for(let i in students)
    {
        if(students[i].age<20)
        {
            output.push(students[i]);
        }
    }
    return output;
}

var res= returnMinors(students);
console.log(res);

