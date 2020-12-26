//1.Given an array of numbers Write a function to separate odd and even numbers in different arrays
function separateOddsAndEvens(arr = []){
  const odds = [], evens = [];
  for(let i = 0; i < arr.length; ++i){
    i % 2 ? evens.push(arr[i]) : odds.push(arr[i]);
  }
  return {odds, evens};
}
//separateOddsAndEvens([45, 12, 3, 6, 17, 0]);

//2. Write a function filterRange(arr, a, b) that gets an array, looks for elements between a and b in it and returns an array of them.
function filterRange(arr, a, b){
  const newArr = [];
  for(let i = 0; i < arr.length; ++i){
    if(arr[i] >= a && arr[i] <= b) newArr.push(arr[i]);
  }
  return newArr;
}
//filterRange([-10, -8, 0, 10, 20], -100, 15)

//3. Write a function which finds corresponding object by it’s id and print it. Elsewhere it should print error message.
function findById(arr, id){
  for(let i = 0; i < arr.length; ++i){
    if(arr[i].id === id) return arr[i];
  } 
  return 'No Data';
}
const frameworks = [
{ id: 1, title: "react" },
{ id: 2, title: "angular" },
{ id: 3, title: "vue" }
];
//findById(frameworks, 3)

//4. Write a function which generates object containing index and info from given array.
function generateObj(arr){
  let newArr=[];
  for(let i = 0; i < arr.length; ++i){
    let obj = {};
    obj.title = arr[i];
    obj.idx = i;
    newArr.push(obj);
  }
  return newArr;
}
//const arr = ['Godfather', 'Whiplash', 'Social Network'];
// generateObj(arr)

//5. Write a function which removes all the words from array starting by a given letter.
function removeByLetter(arr, letter){
  letter = letter.toLowerCase();
  let newArr = [];
  let str = '';
  for(let i = 0; i < arr.length; ++i){
     str = arr[i];
     arr[i] = arr[i].toLowerCase();
     if(!(arr[i].includes(letter))) newArr.push(str);
  }
  return newArr;
}
// const arr = ['Manchester City', 'Milan', 'Marseille'];
// removeByLetter(arr, 'E')

//6.Write a function that repeats the shorter string until it is equal to the length of the longer string.
// - Both strings will differ in length.
// - Both strings will contain at least one character.
// - Either of the two strings could be the shortest in length.
function lengthen(str1, str2){
  let long = '', short = '';
  if(str1.length > str2.length) long = str1, short = str2;
  else long = str2, short = str1;
  short = short.repeat(Math.ceil(long.length/short.length));
  return short;
}
//lengthen("clap", "skipping")



function repeatStr(str1, str2){
  let long = '', short = '';
  if(str1.length > str2.length) long = str1, short = str2;
  else long = str2, short = str1;

  let result = '';
  for(let i = 0; i < Math.ceil(long.length/short.length); ++i){
    for(let j = 0; j < short.length; ++j){
       result += short[j];
    }
  }
  return result;
}
repeatStr("clag", "skipping")
