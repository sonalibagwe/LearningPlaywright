// Iterate - Go from one to another. // 


let tests = ["login", "checkout", "search"];

for (let i=0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("----------");

// for...of (cleanest for values)
for (let i of tests) {
    console.log(i);          // values
}

console.log("----------");

// forEach (no return value)
tests.forEach((test, index) => {
 console.log(`Index ${index}: ${test}`);
});

console.log("----------");

//entries() - index + value
for (let [i, test] of tests.entries()){
    console.log(i, test);
}



console.log("----------");

let students = ["methis", "senthil", "Ajay", "rahul"];
for (let student in students) {
    console.log(student, " => ", students[student]);            //index = in
}


console.log("----------");
const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach((value, index) => {
  console.log(`Index ${index}: ${value}`);
});
