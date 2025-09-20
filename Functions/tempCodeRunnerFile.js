/* write a function that gives the sum number till you want sum from! */

// function sumOfNum(n){
//     let sum = 0;
//     for(let i=1 ; i<=n ; i++){
//         sum =sum+i;
//     }
//     return sum ; 
// }
// console.log(sumOfNum(5));




/* Create  a function that return the concatenation of all strings in a array  */

// let str = ["Hii ","Shagun ","pundir ","what ","are ","you ","doing ?"]
// function concat(str){
//     result = "";
//     for(let i = 0;i<str.length;i++){
//         result = result+str[i]
//     }
//     return result;
// }
// console.log(concat(str));

function outerfunc(){
    let x=5;
    let y=5;
    function innerfunc(){
        console.log(x);
    }
    
}

