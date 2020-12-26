//1. Given an array. Write a recursive function that removes the first element and returns the given array. (without using arr.unshift(),assign second element to first, third element to second...)
function removeFirstEl(arr, i = 0){
  if(i === arr.length - 1){
    arr.pop();
    return arr;
    }  
    arr[i] = arr[i + 1];
 return removeFirstEl(arr,i + 1);
}
//removeFirstEl([4,5,8,5,8,5,74]);

//2. Given an object. Invert it (keys become values and values become keys). If there is more than key for that given value create an array.
function swap(obj){
  let newObj = {};
  for(let key in obj){
    newObj[obj[key]] = key
  }
  return newObj;
}

//swap({ a: '1', b: '2' });

//3. Given the list of the following readers.Output the books sorted by the percent in descending order which readStatus is true.
function sortByStatus(arr){
  arr.sort((a, b) => {
  return a.percent - b.percent;
  })
  let newArr = [];
  for(let i = 0; i < arr.length; ++i){
    if(arr[i].readStatus === true) newArr.push(arr[i])
  }
  return newArr;
}
let array=[
{ book: "Catcher in the Rye", readStatus: true, percent: 40},
{ book: "Animal Farm", readStatus: true, percent: 20},
{ book: "Solaris", readStatus: false, percent: 90 },
{ book: "The Fall", readStatus: true, percent: 50 },
{ book: "White Nights", readStatus: false, percent: 60 },
{ book: "After Dark", readStatus: true, percent: 70 }
];
//sortByStatus(array);

//4. Given an array and a number N.  Write a recursive function that rotates an array N places to the left. (Hint: to add element to the beginning use arr.unshift())
function replace(arr, num, i = 0){
  if(num > 0 && i === num) return arr.splice(num, arr.length + 1);
  arr.push(arr[i]);

 return replace(arr, num, i + 1);
}
//replace(['a','b','c','d','e', 'f', 'g', 'h'],3);

//5.Create a function that builds a tree like object given an array with object which contains parent and id properties.



//6. Write a JavaScript function to get all possible subsets of given length of the given array. Assume that all elements in the array are unique.



//7. Create constructor function which instances would be objects with already implemented method &quot;map&quot; (like Array.map)

