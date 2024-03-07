/1.What is the output of the following code?

let array = [1,2,3,4];

let array1 = array;

array[0] = 100;

// array = ? ( write the values that are stored in array )
// array1 = ? ( write the values that are stored in array1 )

//Note: If you think that it may through an error, you can mention that too.
// DO NOT EXECUTE THIS CODE AND CHECK THE OUTPUT

array =[100,2,3,4]
array1 = [100,2,3,4]

//2.What is the output for the following code?

let str = 'hello';

str[1] = 'make';

// what is the value stored in str? 

//Note: If you think that it may through an error, you can mention that too.
// DO NOT EXECUTE THIS CODE AND CHECK THE OUTPUT

//Ans : the value stored in str is 'hello'

//3.What is the output for the following code?

let myName = 'upskilling sessions';

let myName = 'this is for a test';

// console.log(myName ) // output?

//Note: If you think that it may through an error, you can mention that too.
// DO NOT EXECUTE THIS CODE AND CHECK THE OUTPUT

//Ans : it through an error that myName is already declared

//4. What is the output for the following code?

const num = 100;

num = 200;

// console.log(num) // write down the output.

//Note: If you think that it may through an error, you can mention that too.
// DO NOT EXECUTE THIS CODE AND CHECK THE OUTPUT

//Ans : it through an error because we cant change the const value

//5.What is the mistake in the following code?

// Problem statement: Print value from 1 to 1 using for loop

// Solution:

// const num = 10;

//for(let index=0; index<num, index++{
    
  // console.log(num)  
 // }

// find out the mistake(s) from the above solution and write it down.

//Note: If you think that it may through an error, you can mention that too.
// DO NOT EXECUTE THIS CODE AND CHECK THE OUTPUT

//for (let index=0;index<num.length;index++)

//6.Complete the pending code for the given problem statement?
  // Problem statement: Create a function that should take string as a input and count each character frequency and return in the form of obj as below
// expected output: {a: 2, b:2, ...}

function frequencyCount(str){
    const obj = {};
   
    for (let index=0;index<str.length;index++){
        if(str[index] in obj){
            obj[str[index]]=obj[str[index]]+1;
        }else{
            obj[str[index]]=1
        }
       }
     return obj;
   
   };
   
    console.log(frequencyCount('abcdeabcde'));

   
//7.Write the solution for the below problem statement:

// Problem statement: Find the highest digit in the array
// sample input: [1,2,300,4,10,50,60, 80];
// sample output: 300

let numbers =[1,2,300,4,10,50,60, 80]
function highestDigit(arr){
    let largestnumberinNumbers=numbers.reduce((acc,num)=>{
        return Math.max(acc,num)
       },0)
       return largestnumberinNumbers
    }
        console.log(highestDigit(numbers))
        
//8.What would be output for the below code:

let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  return message;
}

showMessage();

// Output: Hello,John

//Note: If you think that it may through an error, you can mention that too.
// DO NOT EXECUTE THIS CODE AND CHECK THE OUTPUT

//9. Guess the output for the following code:

console.log(!true); // output? false
console.log(!"true"); // output? false
console.log(!Boolean("True")); // output? false


//10.Guess the following option:

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

A: 1 1 2
B: 1 2 2
C: 0 2 2
D: 0 1 2

// option c

//11 . Guess the output for the following code:

let userInfo = {
    name: "Jon",
    house: "Starks",
    100: "Hello Jon",
  };
  
  console.log(userInfo[10 * 10]); // output 1  Hello jon
  
  let user = {
    name: "Arya",
    age: 18,
  };
  
  let key = "name";
  
  console.log(user[key]); // output 2  Arya
  console.log(user.key); // output 3   undefined

  //12. What is the output for the following:

  let userOne = { username: "John" };
let userTwo;

userTwo = userOne;
userTwo.username = "Arya";

console.log(userOne.username); // output 1  Arya
console.log(userTwo.username); // output 2  Arya
console.log(userTwo[username]); // output 3  Error username is not defined

//Assessment-2

//1 .Guess the output of the below code given:
function test() {
    console.log(name);
    console.log(age);
    var name = "Upskilling sessions";
    let age = 21;
  }
  
  test(); // what happens when the function gets called?

  // output: undefined  cannot access age before initialization
  
  //2 . Guess the output of the below code given:

  for (var i = 0; i < 10; i++) {
    // code inside the loop
  }
  
  for (let j = 0; j < 10; j++) {
    // code inside the loop
  }
  
  console.log(i); // output 1  10
  console.log(j); // output 2  Error j is not defined

  //3 .Guess the output for the below code given:

  let value = 100;

function addValues(a,b){
   
    const value = 200;

    return a * value * b;
 
};

addValues(1,2) // output?

// 400

//4.dentify the mistake from the given code below:

let result = if(true){return 10};

console.log(result) // output?

// error because after equalto we cannot write statement

//5.Complete the code for the given problem statement:

function highestRepetition(str){
    let obj ={}
       for (let index = 0;index<str.length;index++){
           if(str[index] in obj){
               obj[str[index]]=obj[str[index]]+1;
           }else{
               obj[str[index]]=1
           }
       }return obj
   
   };
   console.log(highestRepetition(str))


   //6 .Complete the code for the given problem statement:

      // You have to solve two problems in this:

// Problem1: using loops, store all the authors names in an array.
let booksData=require("./data.js")

function authorsNames(data){
    let newArray=[]
    for (let index of data){
        newArray.push(index.author)

        }
        return newArray
    }
    console.log(authorsNames(booksData))


// Problem2: Using array methods store all titles in an array where publication_year is greater than 1900 ( Use expect forEach )

let booksData=require("./data.js")

function year_greater_than_1900(data){


let result = data.reduce((acc,cv)=>{
    if(cv.publication_year>1900){
        acc.push(cv.title);
    }
    return acc;
})
return result
}
console.log(year_greater_than_1900(booksData))


//7.Guess the output for the below code:

function sumOfValues(a,b){

    console.log(a + b);
  };
  
  const result = sumOfValues(1,2)
  
  console.log(result) // output?

  // 3
  // undefined
  
  //8 .Guess the output for the below code:

  const operation = 3 + 4 * 2 - 6 / 3; // ( Hint: Operator precedence )

console.log(operation) // output?

// 9.
str = 'abcdeabcde'

// sample output: {a:2,b:2,c:2,d:2,e:2}

let obj ={}
       for (let index = 0;index<str.length;index++){
           if(str[index] in obj){
               obj[str[index]]=obj[str[index]]+1;
           }else{
               obj[str[index]]=1
           }
       }
   
   console.log((obj))


// Assessment3


//1.Guess the output for the following code:

if(2-2){
  console.log('Hello world!')

}else{
   
  console.log('This is a test!')

};

// This is a test!

//2 .Guess the output for the following code:

for(let index = 0; i<10, i++){

    console.log(index)
    
  };
  
  // it through an error

  //3.Complete the code for the given problem statement:

  // let num = 10; console log only  odd values from 0 to num, use for loop
  
  for (let index=0;index<=10;index++){
    if(index%2!==0)
      console.log(index)
}

// 4. Guess the output for the following code:

let obj = {
  
    name: 'Upskilling Sessions!',
    day: 'Wednesday'
   
   };
   
   let obj2 = obj;
   
   obj[day] = 'Saturday';
   
   console.log(obj) 
   console.log(obj2) 
   
   //output: it through an error

//5 .Complete the code for the given problem statement.

let arr = [1,2,3,4,5,6];

// store all the values from arr into another array called arr1

 let arr1=arr
 console.log(arr1)

 //6.Guess the output:

 let arr = [1,2,3,4,5];

const result = arr.map(value => {  value * 2});

console.log(result)// output?

// undefined

//7 .Complete the code for the given problem statement:

// Problem statement:  Find the least digit from the given array

let array = [1,2,3,4,0, 30, -2,5,6,9]

let leastDigitInArray=array.reduce((acc,cv)=>{
    return Math.min(acc,cv)
},0)
console.log(leastDigitInArray) //-2


//8.Guess the output for the following code:


console.log(typeof(typeof(typeof 3 )))// output?

// string
