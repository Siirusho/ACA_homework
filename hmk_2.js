//1. Write a function which receives an array and a number as arguments and returns a new array from the elements of the given array which are larger than the given number
function largerElementsOfArray(arr, el) {
	let newArr = [];
	for (let i = 0; i <= arr.length; ++i) {
		if (arr[i] > el) newArr.push(arr[i]);
	}
	return newArr;
}
//largerElementsOfArray([10, 25, 16, -5, 30, 15, 24], 16);

//2. Write a function, which receives two numbers as arguments and finds all numbers between them such that each digit of the number is even. The numbers obtained should be printed in a comma-separated sequence on a single line.
function isEvenDigit(n) {
	while (n) {
		let dig = n % 10;
		n = (n - dig) / 10;
		if (dig % 2 === 1) return false;
	}
	return true;
}

function printevenNumbersBetweenElements(start, end) {
	let result = ' ';
	for (let i = start; i <= end; ++i) {
		if (isEvenDigit(i)) result += i + ' ';
	}
	return result === ' ' ? 'Such numbers does not exist.' : result;
}
//printevenNumbersBetweenElements(30, 39);

//3. Given an array of numbers which is almost sorted in ascending order. Find the index where sorting order is violated.
function violatedIndex(arr) {
	for (let i = 0; i <= arr.length - 1; ++i) {
		if (arr[i] > arr[i + 1]) return i + 1;
	}
	return 'Array is sorted';
}
//violatedIndex([2, 12, 3, 15, 48, 64]);

//4. Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
function largestProd(arr) {
	let prod = 0;
	for (let i = 0; i <= arr.length - 1; ++i) {
		if (arr[i] * arr[i + 1] > prod) {
			prod = arr[i] * arr[i + 1];
		}
	}
	return prod;
}
//largestProd([5, 7, 6, 1, 3, 2, 8, 9]);

//5. Given an array of integers. All numbers are unique. Find the count of missing numbers between minimum and maximum elements to make integers sequence.
function missingNumsCount(arr) {
	let count = 0;
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	for (let i = 0; i <= arr.length - 1; ++i) {
		count = max - min - arr.length + 1;
	}
	return count;
}
//missingNumsCount([8, 13, 12, 9, 7]);

//6.Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each row and print them as an array
function sumOfEachRow(arr) {
	newarr = [];
	for (let i = 0; i < arr.length; ++i) {
		let sum = 0;
		for (let j = 0; j < arr[i].length; ++j) {
			sum += arr[i][j];
		}
		newarr.push(sum);
	}
	return newarr;
}
//sumOfEachRow([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]);

//7. Given an array of integers. Write a function that return new array from first array, where removed even numbers, and odd numbers was multiplied with new array length.
function OddsMultipliedWithLength(arr) {
	let newArrWithOdds = [];
	let result = [];
	for (let i = 0; i < arr.length; ++i) {
		if (arr[i] % 2 === 1 || arr[i] % 2 === -1) newArrWithOdds.push(arr[i]);
	}
	for (let j = 0; j < newArrWithOdds.length; ++j) {
		result.push(newArrWithOdds[j] * newArrWithOdds.length);
	}
	return result;
}
//OddsMultipliedWithLength([[]]);
