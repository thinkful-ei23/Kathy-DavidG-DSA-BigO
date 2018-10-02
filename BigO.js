'use strict'

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
			console.log(arr[i] + ", " + arr[j]);  //--> constant
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