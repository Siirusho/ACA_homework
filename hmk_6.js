//1. Given a word and a list of possible anagrams, select the correct sublist.
function findAnagram(str, arr){ 
  let res = [];
  for(let i = 0; i < arr.length; ++i){
    if(arr[i].split('').sort().join()===str.split('').sort().join()){
      res.push(arr[i]);
    }
  }
    return res;
}
//findAnagram('listen',["enlists", "google", "inlets","banana", "inlets"]);


//2.Given a string of digits, output all the contiguous substrings of length n in that string.
function comibnation(str,el, res=''){
  if(str.length === el) return (res + str);
  let newStr = '';
  for(let i = 0; i < el; ++i) newStr += str[i]
  res = res + newStr + ', ';
  return comibnation(str.substring(1), el, res);
}
//comibnation("495215", 3);


//3. Create function which will shuffle (rendomize) the array
function shuffleArr(arr){
  const newArr=[...arr];
  for(let i = 0; i < arr.length; ++i){
    const rand = Math.ceil(Math.random() * (i));
    [newArr[i], newArr[rand]]=[newArr[rand], newArr[i]];
  }
  return newArr;
}
//shuffleArr([5,8,4,7,54]);


//4.Write a function which works as Array.concat but working with infinite number of arrays.
function myConcat(...arr){
  let res=[];
  for(let i = 0; i < arr.length; ++i){
    for(let j = 0; j < arr[i].length; ++j)
    res.push(arr[i][j]);
  }
  return res;
}
//myConcat(['1', 'hello'], [[1, 2], 2]);



//5. Write your own filter, map, reduce, forEach functions
function filter(arr, callBack) {    
  const filterArr = [];        
  for(let i = 0; i < arr.length; i++) {        
    const result = callBack(arr[i], i, arr);       
    if(result) filterArr.push(arr[i]);     
    }    
  return filterArr;
}
//filter([1,2,3,5,5,5], el=>el===5);

function map(arr, callBack) {  
  const mapArr = []; 
  for(let i = 0; i < arr.length; i++) {
    const result = callBack(arr[i], i, arr);
    mapArr.push(result);  
    }  
  return mapArr;
}
//map([1,2,3,4], el=>el*2);


function forEach(arr, callBack) {  
  let forEachArr = [];
  for(let i = 0; i < arr.length; i++) {
    const result = callBack(arr[i], i, arr); 
    forEachArr.push(arr[i])
    }  
  return forEachArr;
}
//forEach([1,2,3], (item, index, arr) =>{arr[index] = item * 10;});


//6. Create function which will store user object inside of a closure

//not sure)
function user(){
  name = this.name;
  password = this.password;
  balance = this.balance;
  let getName = () => name;
  let deposit = amount => this.balance += amount;
  let resetPassword = (newPassord, oldPassword) => {
    if(this.password = oldPassword) this.password = newPassord;
    else return "Access denied";
  }
  let getBalance = (password) => {
    if(password === this.password) return this.balance;
    else return "Access denied";
  }
}