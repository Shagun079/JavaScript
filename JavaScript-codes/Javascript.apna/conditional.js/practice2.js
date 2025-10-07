// // let num1 = prompt("enter the number first");
// // let num2 = prompt("enter the number second")
// // let value;
// // if(num1==100||num1+num2==100)
// //     {
// //     value = "true"
// // }
// // console.log(value)

// //Write a program that determines whether a given number is positive or negative.

// let num = prompt("enter a number ");
//  if(num <0){
//     num = "negative";
//  }
//  else{
//     num = "positive";
//  }
// console.log(num);

// // Write a program that checks if a number is even or odd.

// let num1 = prompt("enter the number first");
// let num2 = prompt("enter the number second");
// let print;
// if(num1>num2){
//     print = "number 1 is greater than number2";
// }
// else{
//     print = " number 1 is smaller than number 2";
// }
// console.log(print);

// Write a program that calculates the ticket price based on age.
// let age = prompt("enter your age");
// let ticketPrice;
// if(age<18 && age>10){
//     ticketPrice = 20;
// }
// else if(age>=18&&age<=40)
// {
//     ticketPrice = 25;
// }
// else if(age<=10) 
// {
//     ticketPrice = " there is no ticket price";
// }
// else if(age>40){
//     ticketPrice = "you are not allowed";
// }
// else{
//     ticketPrice = "enter a valid value";
// }
// console.log(ticketPrice);

//Write a program that calculates a discount based on the
//  purchase amount.Prices equal or over 100 discount have
//  a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0.

//  let price = prompt("Enter the price of product");
//  let discount ;
// if(price>=100){
//     discount = "the discount is 20%";
// }
// else if(price>=50){
//     discount = "the discount is 10 %";
// }
// else{
//     discount = "there is no any discount 0%";
// }
// console.log(discount);
// Scenario: Write a program that greets the user based on 
// the time of day.
// let currentTime = new Date();
// let currentDay = currentTime.getDate();
// console.log(currentDay);


// let red="red"
// let green="green";
// let yellow="yelllow;"
// let color=prompt("enter color it will give info about it");
// if(color==red){
//     console.log("stop");
// }
// else if(color==green){
//     console.log("run");
// }
// else if(color==yellow){
//     console.log("ready");
// }
// else{
//     console.log("enter a valid color")
// }
// let currentTime=new Date();
// let currentDay= currentTime.getDate();
// console.log(`today is the date ${currentDay}`);


// let Xl="Xl";
// let l="l";
// let M="M";
// let S="S";
// let size=prompt("Enter the size of packet of popcorn");
// if(size==Xl){
//     console.log("it is of rupess 250")
// }
// else if(size==200){
//     console.log("is is of rupees 200")
// }
// else if(size==M){
//     console.log("it is of rupees 100")
// }
// else if(size==S){
//     console.log("it is of rupees 50")
// }
// else{
//     console.log("sorry! this size is not valid or not availble")
// }


// let marks=prompt("enter the marks you recieve");
// if(marks>=33){
//     console.table("you are pass")
//     if(marks>=80){
//         console.table("you are a genius");
//     }
// }else{
//     console.table("better luck next time");
// }


// const users = [
//     { name: "Fairy", age: 100 },
//     { name: "Elf", age: 200 },
//   ];
//   console.table(users);

//   let str = prompt("enter a good string");
//   if(str[0]==="a" && str.length>3){
//     console.log("it is a good string");
//   }
//   else{
//     console.log("it is a bad string");
//   }
  


//   let color =prompt("enter the color of your choice");
//   switch(color){
//     case"red":
//     console.log("stop");
//     break;
  
//   case "yellow":
//   console.log("go slow");
//   break;
//   case "green":
//     console.log("go");
  
// default:
//   console.log("enter the correct color");
//   }


let day=prompt("enter the day ");
switch(day){
  case "monday":
  console.log("this is day 1");
  break;
  case "tuesday":
  console.log("this is day 2");
  break;
  case "wednesday":
  console.log("this is day 3");
  break;
  case "thrusday":
  console.log("this is day 4");
  break;
  case "friday":
  console.log("this is day 5");
  break;
  case "saturday":
  console.log("this is day 6");
  break;
  case "sunday":
  console.log("this is day 7");
  break;
  default:
  console.log("enter the day with small letter or check the spelling or write correct ");
  break;
}

alert("something is wrong");