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