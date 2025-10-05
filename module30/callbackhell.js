/*                          COLOR CHANGED IN HEADINGS */


// let h1 = document.querySelector("h1");
// function changeColor(color,delay){
//      return new Promise((resolve , reject)=>{
//      setTimeout(()=>{
//     h1.style.color = color;
//     resolve("color Changed!");
//     },delay);                                                                                // Promises
//     })
    
// }
// changeColor("red",10000)
// .then(()=>{
//     console.log("red was completed ")
//  changeColor("purple",20000);
// })
// .then(()=>{
//     console.log("purple was completed");
//     changeColor("green",6000)
// })
 


//***********************************************************************************************************************************
                                            //CALL BACK HELL
// setTimeout(() =>{
//  h1.style.color ="violet";
// } ,1000);

// setTimeout(() =>{
//  h1.style.color ="indigo";
// } ,2000);

// setTimeout(() =>{
//  h1.style.color ="blue";
// } ,3000);

// setTimeout(() =>{
//  h1.style.color ="green";
// } ,4000);

// setTimeout(() =>{
//  h1.style.color ="yellow";
// } ,5000);

// setTimeout(() =>{
//  h1.style.color ="pink";
// } ,6000); 
// setTimeout(() =>{
//  h1.style.color ="blue";
// } ,7000); 

// setTimeout(() =>{
//  h1.style.color ="brown";
// } ,8000); 

// setTimeout(() =>{
//  h1.style.color ="pink";
// } ,9000); 

// setTimeout(() =>{
//  h1.style.color ="white";
// } ,10000); 

// setTimeout(() =>{
//  h1.style.color ="red";
// } ,11000); 

/************************************************************************ IT HANDLES WITH ERRORS */

let h2 = document.querySelector("h2")
 
function colorchange(color,delay){
    return new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        let num = Math.floor(Math.random()*5)+1;
        if(num>3){
            console.log(num)
             reject("promise rejected");
        }
        h2.style.color = color;
         resolve("color changed");
  },delay)
    })
}
 
  async  function demo(){
    try{
        await colorchange("red",1000);
    await colorchange("blue",1000);
    await colorchange("green",1000);
    await colorchange("red",1000);
    await colorchange("blue",1000);
    await colorchange("green",1000);

 }catch(err){
  console.log("caught an error",err)
 }
 console.log("my name is shagun")
 console.log("my name is shagun")
    
  }

 /**************************************************************SAME CODE BUT UPPER ONE IS HANDLE WITH ERRORS***************************************************************************************** */





// function Color(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h2.style.color = color;
//             resolve("color changed")
//         },delay)
//     })
// }

//  async function demo(){
//  await Color("red",1000);
//  await Color("blue",1000);
//  await Color("red",1000);
//  await Color("purple",1000);
//  await Color("red",1000);
//  await Color("blue",1000);
//  }
//  demo();
    
// Color("red",1000)
// .then(()=>{
//     console.log("red was completed ")
//  Color("purple",2000);
// })
// .then(()=>{
//     console.log("purple was completed");
//     Color("green",6000)
// })
 