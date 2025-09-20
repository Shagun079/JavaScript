/* triangle  */
// let pattern='';
// for(let i=1;i<=5;i++){
//     let pattern='';
//     for(let j=1;j<=i;j++){
//         pattern +='*';
//     }
//     console.log(pattern)
// }
// for(let i = 5 ;i>=1;i--){
//     console.log("*".repeat(i));
// }




// let v = 0;//vowels
// let co = 0;//consonents
// let str= "shagun pundir"
// str = str.toLowerCase();
// for(let i=0;i<str.length;i++){
//     let c=str.charAt(i)
//     if(c!=' '){
//         if(c=='a'||c=='u'||c=='o'||c=='i'||c=='e'){
//             v++;
//         }
//         else{
//             co++;
            
//         }
//     }
               
// }
//  console.log("total number of vowels are=",v);
//                 console.log("total numbe rof consonant are=",co);
// let str = "shagun pundir";
// str = str.toLowerCase();

// let freq = {};

// for (let i = 0; i < str.length; i++) {
//     let c = str.charAt(i);

//     if (c != ' ') {  // space ignore
//         if (freq[c]) {
//             freq[c]++;
//         } else {
//             freq[c] = 1;
//         }
//     }
// }

// // print result
// for (let ch in freq) {
//     console.log(ch, "=", freq[ch]);
// }
   


// console.log(a)

// var a =10;



// sayHello(); // 
// function sayHello() {
//   console.log("Hello");
// }


//  function isBalanced(str){
//   let count = 0;
//   for(let i =0 ; i<=str.length;i++){
//     let ch = str[i];
//     if(ch=='('){
//       count++;
//     }
//     else if(ch==')'){
//       count--;
//     }
//     if(count<0){
//       return false;
//     }
//   }
//   return count ==0;
//  }
//  console.log(isBalanced("((a+b))"));
//  console.log(isBalanced("((a+b)"));
//  console.log(isBalanced("(a+b)"));
   





function primeOrNot(request){
  if (request == "notprime"){
    let notprime = function(n){
      for(let i=0;i<=n;i++){}
      // console.log(n%n==0&&n%1==0&&n%i==0,"then it is not prime")
    }
    console.log(n%n==0&&n%1==0&&n%i==0,"then it is not prime")
    return notprime;
  }
  if (request == "prime"){
    let prime = function(n){
      console.log(n%n==0&&n%1==0,"then it is prime")
    }
   return prime;
  }
} 


let Calculator={
  add : function(a,b){
  return a+b;
},
sub : function(a,b){
  return a-b
},
mul  : function(a,b){
  return a*b;
}
}
