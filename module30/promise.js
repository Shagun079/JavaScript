// function savetoDb(data , success ,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }
//     else{
// failure();
//    }
// }
// savetoDb("Name",
//     ()=>{
//         console.log(" 1 .success your data is saved named as Name ")
//     savetoDb("my name",
//         ()=>{
//         console.log(" 2 .your data is saved sucess name as my name ")

//         savetoDb("yes",
//             ()=>{
//                 console.log(" 3. your data was saved named as yes")
//             },
//             ()=>{
//                 console.log("failure your data was not saved ")
//             }
//         )
//         },
//         ()=>{
//             console.log("failure your data was not saved")
//         }
//     )
// },

//     ()=>{
//         console.log("failure your data was not saved")
//     }
// )

//****************************************************************************************************************************************************************************** */
 

                                                    //Then and catch in Promises //

function savetoDb(data){
   return new Promise((resolve,reject)=>{
  let internetSpeed = Math.floor(Math.random()*10)+1
if(internetSpeed >4){
    resolve(" Success : good connection");
}else{
    reject(" Rejected : week connection");
}
});
}
savetoDb("Harry Poter")
.then((result)=>{
    console.log("data 1 is saved");
    console.log("result 1",result)
    return savetoDb("helloworld");
    })
.then((result)=>{
    console.log("data 2 is saved");
    console.log("result 2",result)
    return savetoDb("my name is Shagun")
    })
    .then((result)=>{
    console.log("data 3 is saved")
    console.log("result 3",result)
    })
.catch((error)=>{
    console.log("rejected",error)
    console.log("Promise was rejected");
    
 }
)