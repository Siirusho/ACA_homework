//1.Given a number. Print “odd” if the number is odd and “even” if it’s even.
function isEvenOrOdd(num) {
	if (num === 1 || num === 0) return 'Neither even, nor odd';
	else if (num % 2 === 0) return 'Even';
 return 'Odd';
}
//isEvenOrOdd(10)


//2.Given five numbers as input. Calculate and print the average of the numbers(without using arrays).
function avg(a, b, c, d, e) {
	return (a + b + c + d + e) / 5;
}
//avg(45, -12, 0, 3, -15);


//3.Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the last digit of the inserted number is 0, number remains the same.
function lastDigitToBegining(num) {
	let lastdig = num % 10;
	num = (num - lastdig) / 10;
	if (lastdig === 0) return +('' + num + lastdig);
	else return +('' + lastdig + num);
}
//lastDigitToBegining(3670);


//4.Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
let num = 21;
if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
	console.log(`${num} is multiple of 3, 5 and 7`);
} else if (num % 3 === 0 && num % 5 === 0) {
	console.log(`${num} is multiple of 3 and 5`);
} else if (num % 3 === 0 && num % 7 === 0) {
	console.log(`${num} is multiple of 3 and 7`);
} else if (num % 5 === 0 && num % 7 === 0) {
	console.log(`${num} is multiple of 5 and 7`);
} else if (num % 3 === 0) {
	console.log(`${num} is multiple of 3`);
} else if (num % 5 === 0) {
	console.log(`${num} is multiple of 5`);
} else if (num % 7 === 0) {
	console.log(`${num} is multiple of 7`);
} else {
	console.log(`${num} is not multiple of 3, 5 and 7`);
}

//5.Write a function to print X star pattern series using loop.
function drawsquare(size, brush="*"){
  let result="";
  for (let i = 1; i <= size; i++) { 
    let row=" ";
        for (let j = 1; j <= size; j++)  
        { 
          if (j === i || j === (size + 1 - i)) row += brush;
          else row+=" ";
    }
    row += "\n";
    result+=row;
  }
  return result;
}
//drawsquare(5)

//6.Create a function that takes two numbers and a mathematical operator and will perform a calculation with the given numbers. +-/ *   Note: If the input tries to divide by 0, return: ("Can't divide by 0!");
function calculator(a = 0, operator, b = 0) {
	if (operator === '+') return a + b;
	if (operator === '-') return a - b;
	if (operator === '*') return a * b;
	if (operator === '/' && b === 0) return "Can't divide by 0!";
	if (operator === '/') return a / b;
}
//calculator(2, "/", 1);

//7.Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.
function intWithinBounds(n, bound1, bound2) {
  let start = Math.min(bound1, bound2);
  let end = Math.max(bound1, bound2);
  if (Number.isInteger(n)){
    if (n > start && n < end) return true;
  }
  return false;
}
//intWithinBounds(3, 1, 9);

//8.Write a function that returns true if a hash contains the specified key, and false otherwise
function hasKey(obj, key) {
	if (obj.hasOwnProperty(key)) return true;
	return false;
}
//hasKey({ pot: 1, tot: 2, not: 3 }, 'not');

//9.Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.
function wordsuf(suffix="ly"){
  return (word) => {return word + suffix }
}
//wordsuf()('total');  //not sure