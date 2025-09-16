// function Hoisting ****************************************
 
//  avg(2,3,4);

// function avg(a,b,c){
//     let average = (a+b+c)/3;
//     console.log(average );
// }

// Var Hoisting this will applicable only on var keyword only************
 
// console.log(age);
// var age =5;
  
//   function solve(number){
//     return function(number){
//         return number*number;
//     }
//   }
//   let ans = solve();
//   let finalAns = ans(5);
//   console.log(finalAns);

// function finalGreet(greet , name ){
//     console.log("hello", name);
//     greet();
    
// }


// function greet(){
//     console.log("hello bhai upper naam ni pdha ");
    
// }
// finalGreet(greet , "Shagun");

//function used as argument *****************************************


// function write(sum, write){
//     console.log("ok",write);
//     sum();
// }
// function sum(){
//     let a=5;
//     let b=4;
    
//     console.log(a+b);

// }
// write(sum,"here is your sum");

//function used in data strcture ************************************


// const arr=[
//     function(a,b){
//     return a+b;
// },
// function(a,b){
//     return a-b;
// },
// function(a,b){
//     return a*b;
// },
// ]
//  let first= (arr[2]);
//  let ans= first(4,5);
//  console.log(ans); 