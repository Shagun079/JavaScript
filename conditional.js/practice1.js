/*GET THE USER INPUT A NUMBER USING PROMPT("ENTER A NUMBER :").
CHECK IF THE NUMBER IS A MULTIPLE OF 5 OR NOT.*/    

  
//   let num = prompt("enter a number ");
// if(num%5==0){
// console.log(num,"is a multiple of5");
// }
// else {
//     console.log(num,"is not a multiple of 5");
// }
// write a code which can give grades to students according to their scores: 
let marks = prompt("enter marks");
let grade;
if (marks>=80&&marks<100){
    grade="A"
}
else if(marks>=70&& marks<=89)
{
    grade = "B"
}else if(marks>=60&&marks<=69)
{
    grade = "C"
}
else if(marks>=50&&marks<=59)
{
    grade = "D"
}
else if(marks<=49)
{
    grade="FAIL"
}
else {
    grade = "fill the correct info"
}
console.log(grade);