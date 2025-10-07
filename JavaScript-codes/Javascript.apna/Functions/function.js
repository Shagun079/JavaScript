// function printName(){
//     console.log("shagun pundir")
// }
// printName();
// // a function is define as a reusable
// //  block of code which is deigned do some specific 
// // task and only be used when called
// //  by its name for  example a console
// //  is also a function.
// function poem(){
//     console.log("twinkle twinkle little star  how i wonder what you are");
// }
// poem();
// // rolling dice.
//  function rollingDice(){
//     console.log(Math.floor(Math.random()*6)+1)
//  }
//  rollingDice();

//  function info(name ,age){
//    console.log(`${name}'s  age is ${age}`);
    
//  }
//  info("shagun",34);
//   function sum(a,b){
//     console.log(a+b);

//   }
//   sum(45,34);
// function avg3num(a,b,c){
//   console.log((a+b+c)/3);
// }
// avg3num();



// print table

// function table(a){
// for(let i=1;i<=10;i++){
//   console.log(a*i);
// }
// }
// console.log("table of 6");
// table(6);
// console.log("table of 7");
// table(7);
// console.log("table of 10");
// table(10);
//  function isAdult(age){
//   if(age>=18){
//     return"adult";
//   }else{
//     return"not adult";
//   }
//  }


// Create a function that returns the sum of numbers from 1 to n

// function sum(n){
//   let sum=0;
//   for(let i=1;i<=n;i++){
//     sum =sum+i;
    
//   }
//   return sum;
// }
// let str=["Hello","My","name","is","Shagun"];
// function concat(str){
//   let result="";
//   for(let i=0;i<str.length;i++){
//     result+=str[i];
//   }
//   return result;
// }


// llexiacal scope

function outerFun(){
  let x=5;
  let y=5;
  function innerFun() {

  }
}
