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


/* lexical scope */

// function outerFunc(){
//     let x=5;
//     function innerFunc(){
//         console.log(x);
//     }
//     innerFunc()
// }


/* Function expression */


// const voting = function(age){
//     if(age>=18){
//         console.log("you can vote");
//     }
//     else{
//         console.log("you can not vote");
//     }
// }
// voting(43);
// voting(3)


/* higher order function  */


// function multipleGreet(greet,name,n){
//     for(let i=0;i<=n;i++){
//         greet();
//         name();
//     }
// }
// function greet(){
//     console.log("Hello")
// }
// function name(){
//     console.log( "shagun")
// }
// console.log(multipleGreet(greet ,name ,4))



/* Higher Order Request function */

// function evenOdd(request){
//     if(request=="odd"){
//         let odd= function(n){
//             console.log(!(n%2==0));
//         }
//         return odd;
//     }
//     if(request=="even"){
//         let even = function(n){
//             console.log(n%2==0);
//         }
//         return even;
//     }
//     else{
//         console.log("wrong reuest");
//     }
    

// }
 


function canVote(request){
    if (request=="adult"){
    let adult=function(n){
        console.log(n>=18,"can vote")
    }
return adult;
    }
    if(request=="notAdult"){
        let notAdult = function(n){
console.log(n<18,"can not vote")
        }
        return notAdult;
    }
    else{
        console.log("wrong request");
    }
}