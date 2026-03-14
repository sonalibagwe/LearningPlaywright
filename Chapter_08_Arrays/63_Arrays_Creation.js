//Array

let fruits = [];
let fruits_fresh = ["Apple", "Banana", "Mango"];                      //3, index - 0,1,2

//console.log(fruits);            //ReferenceError: fruits is not defined
console.log(fruits_fresh);        //['Apple', 'Banana', 'Mango']

let arr = [10, 20, 30, 40];
console.log(arr.length);            //4   

console.log(arr[0]);              //10       
console.log(arr[3]);              //40
console.log(arr[4]);              //undefined


let testResult = ["Pass", "Fails", "Pass", "Skip"];
let  mixed = [1, "Hello", true, null];    //JS arrays can hold any type

console.log(testResult);     //[ 'Pass', 'Fails', 'Pass', 'Skip' ]
console.log(mixed);         //[ 1, 'Hello', true, null ]



//Creating Arrays
// Array literal 
let browser = ["Chrome", "Firefox", "Safari"];


// Array Contractor
let scores = new Array(3);            // creates [empty x 3]
let scores2 = new Array(1, 2, 3);       //creates [1, 2, 3]

let numbers = new Array(100, 200, 300, 400);    //creates array with index 0-3: 4
console.log(numbers);                       //[100, 200, 300, 400]


//Array.of()
let test = Array.of(10, 20, 30, 40, 50);      //creates 0-4: 5
console.log(test);                      //[10, 20, 30, 40, 50]
console.log(test[0]);                   //10


//Array.from()
let chars = Array.from("hello");     //["h", "e", "l", "l", "o"]
console.log(chars);