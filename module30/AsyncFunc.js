// async function greet(){
// throw "404 page not found";
//     return "hello!"
//     }
//     greet()
//     .then((result)=>{
//         console.log("promise is resolved");
//         console.log(result)
//     })
//     .catch((err)=>{
//         console.log(" error :",err)
//     })
// let demo =async()=>{
//     return 5;
// }



function getNum(){
return new Promise((resolve , reject)=>{
    setTimeout(()=>{
    let num = Math.floor(Math.random()*10)+1;
    console.log(num);
    resolve();
    },1000);
});
}
async function demo(){
 await getNum();
 await getNum();
 await getNum();
 await getNum();
 await getNum();
 await getNum();
 await getNum();
}
