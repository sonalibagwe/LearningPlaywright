let arr = [1, 2, 3];
console.log(arr);                   //[1, 2, 3]

//Add to END
arr.push(4);
console.log(arr);               //[1, 2, 3, 4]


//Remove from END
arr.pop();
console.log(arr);               //[1, 2, 3]


//Add to END
arr.push(5, 6);
console.log(arr);               //[1, 2, 3, 5, 6]


// Add to BEGINING
arr.unshift(0);
console.log(arr);               //[0, 1, 2, 3, 5, 6]

// Remove from BEGANING
arr.shift();
console.log(arr);               //[1, 2, 3, 5, 6]

//Splice(stat, deleteCount, ...itemsToAdd)
arr.splice(2, 1);           //remove 1 item at index 2
console.log(arr);           //[1, 2, 5, 6]


arr.splice(2, 0, 99);           //add 1 item at index 2
console.log(arr);               //[1, 2, 99, 5, 6]

arr.splice(1, 2, 10, 20, 30);       //remove 2 item at index 1 and add item at index 1
console.log(arr);                   //[1, 10, 20, 30, 5, 6]




