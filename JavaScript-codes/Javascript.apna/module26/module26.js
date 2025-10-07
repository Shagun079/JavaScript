// For Each function**********************************************


// let arr = [1,2,3,4,5,6,7,8];
// arr.forEach(function(el){
//     console.log(el)
// }) 

// Map function *************************************************************

// let student= [
//     {
//         name : "Shagun",
//         marks: 78,
//     },
//         {
//         name : "Shami",
//         marks: 88,
//     },
//         {
//         name : "Suman",
//         marks: 90,
//     },
//         {
//         name : "Shayama",
//         marks: 78,
//     },
// ]
 
// let gpa = student.map((el) =>{
//     return el.marks/10;
// })
// console.log(gpa)

// filter function ***********************************************************

// let num = [2,3,4,5,6,66,77,88,69]
// let even = num.filter((el) =>{
//  return el %2 ==0;
// });
 

//Every Method*****************************************************************


// let arr = [2,4,6,8,10,12,14];// it is true
// let ans = arr.every((el)=>{
//     return el %2==0;
// });


//Reduce************************

// let arr=[3,4,55,6,7,8,];
// let ans = 0;
// for(let i = 0; i<arr.length;i++){
//   if(arr[i]>ans){
//     ans = arr[i];
  
// }


// }
// console.log(ans)

// We can do this by using reduce function
// let arr = [ 1,2,3,45,22,33,44,3,4,5,6,7,8]
// let ans  = arr.reduce((min,el)=>{
//     if(el<min){
//         return el;
//     }
//     else{
//         return min;
//     }
// });
  


// Default Parameters*****************
//giving a default value to an arguement 
 
// function sum(a,b=6){
//     return a+b;
// }

// console.log(sum(4,7));





//Spread ************************
// Expands an iterate into multiple values means to make a loop on the number                                                                                                         

// let arr=[2,56,78,9,4,3,0,5,6,2];
// console.log(Math.min(...arr));
// arr.push(-4)
// console.log(arr)
// console.log(..."Hello World")


// const data ={
//     name : "Iron man",
//     emailId:"ironman@gmail.com",
//     password : "xyz@123"
// }
// const datacopy = {...data,id: 609}

// console.log(datacopy);

// const obj1 ={..."hello"}
// console.log(obj1)



// REST **********************************************
//Allows  a function to take an indefinite number of arguements and bundle them in an array
// function sum(...args){

//     for(let i = 0 ; i<args.length;i++){
//         console.log("this is printing",args[i])
//     }
// }
// sum(3,4,5)

// function min(...args){
//     return args.reduce((min,el)=>{
//         if(min>el){
//             return el;
//         }else{
//             return min ;
//         }

//     });
// }
// console.log(min(10,23,45))

//Destructing ****************************************

// let names = ["tony","bruce","peter","steve","xyz"]
// let [winner,runnerup,...other]=names;
// console.log( "winner:",winner);
// console.log("runnerup:",runnerup);
// console.log(other)


//Practice Question 1                            *************

// let arr= [56,3,4,23,34,677,87,22,33,43,12];
// let sum =arr.reduce((res,el)=>{
//  return res+el;
// })
// console.log(sum/arr.length)


//Practice Question 2                             *******************

// let arr=[1,2,3,4,5,6,7,8,9]
// let newArr = arr.map((el)=>
// {
//     return el+5;
// })
// console.log(newArr)

//Practice Question 3                     ********************

// let arr = ["MY", "Name", "Is"," shagun"]
// let newArr = arr.map((arr)=>{
//    return arr.toUpperCase();
// })
// console.log(newArr)

//Practice Question 4                  **************************

// let double=( arr,...args)=>[
// arr,
//     ...args.map((v)=>v*2),
// ];
// console.log(double([1,2,3],1,2,3))