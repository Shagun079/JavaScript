// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelector("li");

// div.addEventListener("click",function(){
//     console.log("div was clicked")
// });
// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul was clicked")
// });


// for(li of lis){
// li.addEventListener("click",function(){
//     console.log("li was clicked")
// });
// }




//////Desiigning a ToDo List Web App
// let input = document.querySelector("input");
// let ul = document.querySelector("ul");
// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
// let item = document.createElement("li");
// item.innerText = input.value;

// let delBtn = document.createElement("button");
// delBtn.innerText = "delete";
// delBtn.classList.add("delete");
// item.appendChild(delBtn);
// console.log(input.value)
// ul.appendChild(item);
// input.value="";    
// })


// ul.addEventListener("click",function(event){ // here we have used the item delegation 
//     if(event.target.nodeName=="BUTTON"){
//         let listItem = event.target.parentElement;
//         listItem.remove();
//         console.log("deleted");
//     }
// })

// let delBtns = document.querySelectorAll(".delete"); // by this code we can not delete the newly added items 
// for(delBtn of delBtns){
// delBtn.addEventListener("click",function(){
//     let par = delBtn.parentElement;
//     console.log(par);
//     par.remove();
// })
// }





