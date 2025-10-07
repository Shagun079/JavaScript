  
  // let age =prompt("enter the age");
  // let status =(age>18)? ("can vote"):("can't vote");
  // console.log(status);


  // let ans=(5<<2);
  // console.log(ans);
 
  // let number=prompt("enter kr bhai 1 se 5 tk ki ginti");
  // if(number==1){
  //   console.log("a");
  // }
  //  else if(number==3){
  //   console.log("c");
  //  }
  //  else if(number==5){
  //   console.log("ye hi toh hai ");
  //  }
  //  else{
  //   console.log("na bhai shi ni kh ra ");
  //  } 

  //Calculator ********************************************************************

  //  let num1=prompt("enter num1");
  //  let num2= prompt("enter num2");
  //   let operator ="*";
  // switch(operator){

  //  case "+":{
  //   console.log(num1+num2)
  //   break;
  //  }
  
  //  case "-":{
  //   console.log(num1-num2)
  //   break;
  //  }
  
  //  case "/":{
  //   console.log(num1/num2)
  //   break;
  //  }
  
  //  case "*":{
  //   console.log(num1*num2)
  //   break;
  //  }
  
  // }


  //loops and strings************************************************************

// for(let i=1;i<=4;i++){
//   if(i==3){
//     continue;
//   }
//   console.log(i)
// }

//print prime or not ********************************************************

// let n=34;  //prompt("enter a number of your choice");
//  let div=2;
//  while(div<n){
//   if(n%div==0){
//     console.log("not prime")
//     break;
//   }
//   else if(div++){
// console.log("prime")
// break;
//   }
  
//  }
 

//sum of n natural number******************************************************************

// let num = prompt("enter till wich end you want to add numbers");
// let val=1;
// let sum=0;
// while(val<=num){
//   sum=sum+val;
//   val=val+1;
//   console.log(sum);
// }

// area of circle***************************************************************************
  
// let radius = prompt("enter the value of radius");
// let area = (radius**2)*3.14;
// console.log(area);

//greatest of two numbers ******************************************************************

// let firstNum=prompt("enetr the firstnumber ");
// let secondNum=prompt("enter the secondnumber");
// if(firstNum>secondNum){
//   console.log("the number is great first",firstNum);
// }
// else{
//   console.log("the number is great second",secondNum);
// }


// Find all the roots of a quadratic equation 𝑎𝑥^2 + 𝑏𝑥 + 𝑥 =(Optional Qs)


// Functions*********************************************************************************
 
// function sum() {
//   let a=5;
//   let b=6;
//   sum=a+b;
//   console.log(sum);
// }
// sum();


// return ************************************************************************************
 
// function myName(firstname , lastname ){
//   let fullName = firstname + " " + lastname;
//   return fullName;
// }
// let ans = myName("Shagun","Pundir");
// console.log(ans)

//another example****************************************************************************

// function sub(a,b){
//   let subtraction= a-b;
//   return subtraction;
// }
// let answer= sub(4,5);
// console.log(answer);

//another Example*****************************************************************************

// function mul(x,y){
//   return x*y;
// }
// let ansr = mul(4 , 5);
// console.log(ansr); q

//Arrow function******************************************************************************

// let getSqr = (r)=>{
//   return r**2;
// }
// console.log( getSqr(5));

//array ***************************************************************************************

// let arr = ['shagun',45 , "Pundir"]
// console.log(arr);
// console.log(arr[0]);

// Built in Methods of the array lets do code on them one by one ********************************

// let arr = ["car","bike","music",21,true ,false ,"welcome"];

//  arr.splice(1,2,"radhey");
// console.log(arr);

// array Map Method******************************************************************************

// let   arr = [30,33,34];
// let myans = arr.map((number) => {
//   return number +1;
// }
// )
// console.log(myans);

//array filter method****************************************************************************

// let arr=["Shagun", 1,2,3,4,5,6,7,8, "Pundir"];
// let ans = arr.filter((value)=>{
//   if(typeof(value)== "number" ){
//     return true;}
//     else {

//       return false;
//     }
//   }

// )
// console.log(ans);

//ARRAY FILTER METHOD****************************************************************************

// let arr = [400,500,600,700];
// let ans = arr.reduce((acc,curr)=>{
// return acc+curr;
// },0)
// console.log(ans);

//Array sort method*******************************************************************************

// let array=[1,2,3,4,5,6,7,8,9,0,11,12,13,14,15,16,17,18,19,20]
//  array.forEach((value ,index)=>{
//   console.log( "number:",value ,"index",index)
// }
// )

//for each
//for in
//for of 


// arrays in function*********************************************************************

// let arr=[1,2,3,4,5];
// function getSum(arr){
//   let len = arr.length;
//   let sum=0;
  
//   for(let index=0;index<len;index++){
//     sum=sum+arr[index]
//   }
//   return sum;
// }
// let totalSum = getSum(arr);
// console.log(totalSum);
let arr=[1,2,3,4,5];
function getSum(arr){
  let len = arr.length;
  let sum=0;
  for(let index=0;index<len;index++){
    sum = sum +arr[index];
  }
  return sum;
}
let ans = getSum(arr);
console.log(ans);