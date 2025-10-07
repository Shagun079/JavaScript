/* write a js function to extract unique characters from a string 
example : str = "abcdabcdefgggh
ans = "abcdefgh" */

// function findUnique(str){
//     let str1 = "";
//     for(let i=0;i<str.length;i++){
//         let currChar= str[i];
//         if(str1.indexOf(currChar)==-1){
//             str1=str1+currChar;
//         }
//     }
// return str1;
// }
//  let ans = findUnique("aabbbcccdd")
//  console.log(ans)



/*Write a JavaScript function to count
 the number of vowels in a String argument.*/

//  function toCheckVowels(str){
//     let count =0;

//     for(let i =0 ; i<str.length;i++){
//     let ch =str[i].toLowerCase();
//         if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
//             count++;
//         }
//     }return count;
//  }
//  let ans = toCheckVowels("shagun");
//  console.log(ans)



/* Write a javaScriptfunction taht accept a list of country names
as a input the longest country name as output . Example : country =["Australia","Germany","United States of America"]
out put :"United States of America" */

//  function isLarge(){
//     let large ="";
// let arr1=["Australia","Germany","United States of America"];
// for(let i=0;i<arr1.length;i++){
//     if(arr1[i].length>large.length){
//         large = arr1[i]
//     }
// }
// return large;
// }
// console.log(isLarge());




/*Write a JavaScript function to gnerate a random number with in a 
range (start,end)*/

// function randomNo(start,end){
// return Math.floor(Math.random()*(end -start +1))+start;
    
// }
// console.log(randomNo(7,90))


