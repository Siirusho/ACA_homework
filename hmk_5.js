//1.Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a word or phrase without a repeating letter.
function isIsogram(str, i = 0){
str = str.toLowerCase();
 if(i > str.length) return true;
 if(i < str.length) {
  for(let j = i + 1; j < str.length; ++j){
    if(str[i] === str[j]) return false;
  }
 }
 return isIsogram(str, i + 1);
}
//isIsogram("Area");

//2.Write a recursive function to determine whether all digits of the number are odd or not.
function isAllDigitsOdd(num){
  if(!num) return true;
  let dig = num % 10;
  if(dig % 2 === 0) return false;
  return isAllDigitsOdd((num - dig) / 10)
}
//isAllDigitsOdd(453276);

//3.Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).
function concatArr(arr, newArr = []){
  for(let i = 0; i < arr.length; ++i){
    if(Array.isArray(arr[i])){
      concatArr(arr[i]).forEach(function (value){newArr.push(value)})
    }
    else newArr.push(arr[i]);
  }
return newArr;
}
//concatArr([1, [3, 4, [1, 2]], 10]);

//4.Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result.
function sumOfDigits(num, sum = 0, count = 0){
  if(!num && sum > 10) return count;
  if(!num && sum < 10) return sum;
  let dig = num % 10
  sum += dig;
  ++count;
  return sumOfDigits((num-dig)/10, sum, count);
}
//sumOfDigits(545);

//5.Given a sorted array and an element from that array. Find the index of that element using binary search. Please research about binary search please don't copy and paste the solution, just try to understand it..
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let i = Math.floor((start + end) / 2);
    if (val === arr[i]) return i;
    if (val < arr[i]) end = i - 1;
    else start = i + 1;
  }
  return -1;
}
let a = [1, 2, 3, 4, 6, 10];
//binarySearch(a, 10);

