
// function hello(name){
//     console.log("hello my name is ",name)
// }


// function demo(){
//     hello("Shagun")
// }
// demo();


// Visualizing the Call Stack 


// function one(){
//     return 2;
// }
// function two(){
//     return one()+one();
// }
// function three(){
//    let ans =two()+one();
//    console.log(ans);
// } 
// three();

// let p = document.querySelector(".p2");
// p.innerText = "Call Stack is data Structure which have track of present runnign call or say Sequence."


//BreakPoints                    
/*Breakpoints are generally used to debug the function call
It let us know that in which  sequence the functions are executing */
 


// Js is  a single Threaded language

//Synchrous nature means task is done oone by one "one after one "

setTimeout(function(){ 
    console.log("name is Schagun")
},2000);
console.log("hello My ");