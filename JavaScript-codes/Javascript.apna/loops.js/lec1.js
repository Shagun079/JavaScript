// //while loop(condition check in starting)
// let i=1;
// while(i<=5){
// console.log("i = ",i);
// }
// i++;
 
// In do while loop conditin checked in at the end 

// let i = 1;
// do{

//     console.log("i=",i);
//     i++;
// }
//  while (i<=10);

//for of loop (generally it is used for strings and array)

// let str = "ShagunRadheshyam";
// let size =0;
// for(let i of str){
//     console.log("i=",i); 
//     size++;
// }
// console.log("string size =",size );
  //for in loop which is basically gona used for objects
  // let student={
  //   name:"Thakur Shagun Pundir",
  //   age  : 20,
  //   cgpa :7.5,
  //   isPass: true
  // }
  // for (let key in student){
  //   console.log("key",key,"vlaue=",student[key]);
  // }
  //Let practice

  //print all the even number from 0 to 100 input from user.

// let num = prompt("enter the number of your choice ");
// for(let i = 0; i<=num; i++){
// if(i%2==0)
// console.log(i)
// }

// create a game where you start with any random game number .as  the user to keep guessing the game number until the user enters correct value
// let gameNum = 25;
// let userNum = prompt("guess the number :");
// while(userNum!=gameNum){
//   userNum=prompt("you have entered the wrong number .guess again");
// }

// console.log("conratulations you have entered the right number ");

// let num = prompt("enter number ");
// let i;
// for(let i =1; i<=num;i++)
// if(i%2==0 )
// console.log(i);


// function replaceEverySecondWithZ(input) {
//   let result = '';
//   for (let i = 0; i < input.length; i++) {
//       if ((i + 1) % 2 === 0) {
//           result += 'Z'; // Replace every second character with 'Z'
//       } else {
//           result += input[i];
//       }
//   }
//   return result;
// }
// function replaceEverySecondWithZ(input) {
//   let result = '';
//   for (let i = 0; i < input.length; i++) {
//       if ((i + 1) % 2 === 0) {
//           result += 'Z'; // Replace every second character with 'Z'
//       } else {
//           result += input[i];
//       }
//   }
//   return result;
// }

// // Example usage
// const inputString = "exampletext";
// const outputString = replaceEverySecondWithZ(inputString);
// console.log(outputString); // Outputs: eZaZpZeZtZxZ

// // Example usage
// const inputString = "exampletext";
// const outputString = replaceEverySecondWithZ(inputString);
// console.log(outputString); // Outputs: eZaZpZeZtZxZ
// function replaceEverySecondWithZ(input) {
//   let result = '';
//   for (let i = 0; i < input.length; i++) {
//       if ((i + 1) % 2 === 0) {
//           result += 'Z'; // Replace every second character with 'Z'
//       } else {
//           result += input[i];
//       }
//   }
//   return result;
// }

// // Example usage
// const inputString = "exampletext";
// const outputString = replaceEverySecondWithZ(inputString);
// console.log(outputString); // Outputs: eZaZpZeZtZxZ
  

// Given a string change the every second letter to an uppercase ‘Z’. Assume
 
// let str = prompt("enter a string ");
// let newStr = '';
// for(let i =0 ;i<str.length;i++){
//   if((i+1)%2==0){
//     newStr += str;
//     console.log(newStr);
//   }
// }
    

// for(let i=1; i<=15;i=i+2)
// {
//   console.log(i);
// }
// console.log("backwards");
// for(let i=15;i>=1;i=i-2)
// {
//   console.log(i);
// }
 

// for(let i=2;i<=12;i=i+2){
//   console.log(i)
// }

// let n= prompt("enter any number and find table");
// n=parseInt(n)
// for(let i=n; i<=n*10;i=i+n){
//   console.log(i);
// } 
// //nesting of loops 
//   for (let i=1;i<=3; i++){
//     console.log("outer loop")
//     for(let j=1;j<=23;j++){
//       console.log(j);
//     }
//   }

//while loop we  can do evey work by using for aur while loop
  //  let i=5;
  //  while(i<=23){
  //   console.log(i)
  //   i++;
  //  }
  //** write a game for gauessing movie */
//   let favouriteMovie="avatar";
//   let guess=prompt("enter favouriteMovie name");
//   while((guess!=favouriteMovie )&& (guess!="quit") ){
//     guess=prompt("wrong guess. Try again")
// }
// if(guess==favouriteMovie){
//   console.log("yes! you are correct");
// }else{
//   console.log("you have quit");
// }
// let i=0;
// while(i<=10){
//   if(i==4){
//     break;
//   }
//   console.log(i);
//   i++;
// }
// console.log("we use break"); 

// let favMovie="Aa Aa";
// let guess =prompt("enter your favourite Movie");
// while((guess!=favMovie)&&(guess!="quit")){
//   guess=prompt("keep Trying because of wrong guess");
// }
// if(guess==favMovie){
//   console.log("yes! you Guess it right");
// }else{
//   console.log("you have quit");
// }
// let heroes=[["ironman","spiderman","thor"],["superman","wonder woman","flash"]];
// for(let i=0;i<heroes.length;i++){
//   console.log("list  --->",i);
//   for(let j=0;j<heroes[i].length;j++){
//     console.log(heroes[i][j]);
//   }
// }

// let a = prompt("enter any number");
// for(let i =1; i<=10;i++){
// let table = a*i;
// console.log(table);
// }

 
//prime or not***********************************************


// let num = prompt("enter any number");
// let num2=0;
// for(let i =1;i<=num;i++){
//     if(num%i==0){
//       num2++;
// }}
// if(num2==2){
//   console.log(" prime bro");
// }else{
//   console.log("not prime");
// }


/* Write code for printing alphabet*/

// for(let i= 65;i<=90;i++){
//   console.log(String.fromCharCode(i));
// }


// let sum=0;
//   for(let i=1;i<=100;i++){
//     if(i%2==0){
//       sum = i+sum;
//     }
//      }
//   console.log(sum);
//  let num=prompt("enter a number ");
//  let fact=1;
//  for(let i=num ;i>0;i--){
// fact = i*fact;
//  }
//  console.log(fact);

/* multiplication tbale for 5 */ 
// let num = 5;
// let table = 0;
// for(let i =1; i<=10;i++){
//   table = num*i;
//   console.log("5*",i,"=",table)
// }

/* Nested loops  */

// for(let i= 1; i<=3;i++){
//   console.log("outer loop")
//   for(let j=1;j<=3;j++){
//     console.log(j);
//   }
// }

/* movie guessing */

// let favMovie=prompt("enter the movie");
// let guess=prompt("enter your guess");
// while(guess!=favMovie && guess!="quit" ){
//   guess=prompt("try again wrong guess");
// }
// if(guess==favMovie){
//   console.log("yes you are right")
// }
// else if(guess=="quit"){
//   console.logg("exit");
// }
    


/* fibonacci series */

// let num = prompt("enter a number till you want to find the fibonacci series")
// let fibo = [0,1];
// for(let i=2;i<num;i++){
//   fibo[i] = fibo[i-1]+fibo[i-2];
// }
// console.log(fibo)
 

// let num =prompt("enter the number till you want to find the ffibonacci ");
// let a=0;
// let b=1;
// console.log(a);
// console.log(b);
// for(let i=0;i<=num;i++){
// let temp = a+b;
// console.log(temp);
// a=b;
// b=temp;
// }

let num =parseInt(prompt("enter the number"));
let t1= num;
let length = 0;
while(t1!=0){
  t1=Math.floor(t1/10);
  length=length+1;
  }
 console.log(length);

