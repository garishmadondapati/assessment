//1.What is the output of the following code?

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