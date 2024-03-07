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