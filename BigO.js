'use strict';

// Even or odd  constant 0(1)
function isEven(value) {
  if (value % 2 == 0) {  //--> constant O(1)
    return true;  //--> constant
  }
  else
    return false;  //--> constant
}

// Are you here?  polynomial 0(n^2) quadratic
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {  //--> polynomial O(n^2) quadratic
    const el1 = arr1[i];     //--> constant
    for (let j = O; j < arr2.length; j++) {
      const el2 = arr2[j];  //--> constant
      if (el1 === el2) return true;
    }
  }
  return false;  //--> constant
}

// Doubler  0(n) linear
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {  // --> O(n) linear
    array[i] *= 2;
  }
  return array;   //--> constant
}

// Naive Search  0(n) linear
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {  // --> O(n) linear
    if (array[i] === item) {   // --> 0(n) linear
      return i;    //--> constant
    }
  }
}
// Creating pairs:  polynomial 0(n^2) quadratic
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {  // --> polynomial O(n^2) quadratic
    for (let j = i + 1; j < arr.length; j++) { // --> polynomial 0(n^2) quadratic
      console.log(arr[i] + ', ' + arr[j]);  //--> constant
    }
  }
}


// Computing fibonaccis  O(n) linear
function generateFib(num) {
  let result = [];  //--> constant
  for (let i = 1; i <= num; i++) {  // --> O(n) linear

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {     //--> constant
      result.push(0);  //--> constant
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) { //--> constant
      result.push(1);  //--> constant
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);   //--> constant
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;  //--> constant
}

// An Efficient Search  logarithmic O(log(n))
function efficientSearch(array, item) {
  let minIndex = 0;      						//--> constant
  let maxIndex = array.length - 1;	//--> constant
  let currentIndex;									//--> constant
  let currentElement;								//--> constant

  while (minIndex <= maxIndex) {		//--> logarithmic O(log(n))
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;					//--> constant
    }
  }
  return -1;												//--> constant
}

// Random element  O(1)
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Is it prime?   linear O(n)
function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {  //--> constant
    return false;					//--> constant
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {   // --> linear O(n)
    if (n % i == 0) return false;  //--> constant
  }
  return true;  //--> constant
}

//RECURSIVE DRILLS

//Count Sheep linear O(n)
function countSheep(num){
  //stopping condition of base case
  if(num === 0){   // linear O(n)
    console.log('All sheep jumped over the fence'); //constant
  } 
  //this is the recursive case
  //this will be executed until it reaches base case
  else{
    console.log(`${num}: Another sheep jump over the fence`); //constant
    countSheep(num-1); //constant
  }
}

//Array Double //linear O(n)
function double_all(arr) {
  if (!arr.length) { //constant
    return []; //constant
  }
  return [arr[0] * 2, ...double_all(arr.slice(1))]; 
}

//Reverse String linear O(n)
function reverseString(str) {
  if (str.length < 2) { //constant
    return str; //constant
  }
  return reverseString(str.slice(1)) + str[0]; //recursive call makes it linear
}

//Triangular Number linear O(n)
function triangle(n) {
  if (n < 2) //constant
    return n; //constant
  return n + triangle(n - 1); //recursive call makes it linear
}

//String Splitter linear O(n)
function split(str, sep) {
  var idx = str.indexOf(sep); //constant
  if (idx == -1) //constant
    return [str]; //constant
  //you don't have to return an array, you can return a string as an array of 
  //character 
  //return str;
  return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep)); //recursive call makes it linear
  //all these are valid syntax
  //return (str.slice(0,idx) + (split(str.slice(idx + sep.length), sep)))
  //return str.slice(0,idx).concat(split(str.slice(idx + sep.length), sep))
}

//Binary Representation Logarithimic time O(log(n))
function convertToBinary(num){
  if(num>0){ //constant
    let binary = Math.floor(num%2); //save the reminder in binary
    //divide the number by 2 and send that to the function again
    //carry the reminder to the next recursion call
    return (convertToBinary(Math.floor(num/2))+ binary); // O(log(n))
  }else{
    return ''; //base case - at some point the divisions will lead to 0
  }
}

//Factorial linear O(n)
function factorial(n) {  
  // Base Case - when n is equal to 0, we stop the recursion
  if (n === 0) { // constant
	  return 1; //constant
  }
  // This is our Recursive Case
  // It will run for all other conditions except when n is equal to 0
  return n * factorial(n - 1);
}

// Fibonacci linear O(n)
function fibonacci(n) {
  // Base case
  if (n <= 0) { //constant
	  return 0; //constant
  }
  // Base case
  if (n <= 2) { //constant
	  return 1;
  }	
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);	//recursive call makes it linear
}

//Anagrams  Expotential O(2^n)
function anagrams(prefix, str){
  if(str.length <= 1){ //constant
    console.log(`The anagram is ${prefix}${str}`); //constant
  } else {
    for(let i=0; i<str.length; i++){ // linear O(n)
      let currentLetter = str.substring(i, i+1); //constant
      let previousLetters = str.substring(0,i); //constant
      let afterLetters = str.substring(i+1); //constant
      anagrams(prefix+currentLetter, previousLetters+afterLetters); // 
    }
  }
}
function printAnagram(word){
  //console.log(`The word for which we will find an anagram is ${word}`);
  anagrams(' ', word);

}

// Animal Hierarchy polynomial O(n^2)
const animalHierarchy = [
  {id: 'Animals', parent: null},
  {id: 'Mammals', parent: 'Animals'},
  {id: 'Dogs', parent:'Mammals' },
  {id: 'Cats', parent:'Mammals' },
  {id: 'Golden Retriever', parent: 'Dogs'},
  {id: 'Husky', parent:'Dogs' },
  {id: 'Bengal', parent:'Cats' }
];

// ==============================
function traverse(animalHierarchy, parent) {
  let node = {}; //constant
  animalHierarchy.filter(item => item.parent === parent)
    .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
  return node;  
}


