// let  heading = document.querySelector("h1");
// heading.style.color = "purple";
// heading.innerText = " Q. What is your name?\n "
// heading.classList.add("abc")
// // let btn = document.querySelector("btn")
// heading.append(" A. My name is Shagun pundir ")
// // adding a new para  
// let para = document.querySelector("p");
// para.innerText = "this is a new para";
// para.insertAdjacentElement("beforebegIn",heading)
// let body  = document.querySelector("div");
// body.removeChild(para)

// let para = document.createElement('p')
// para.innerText= "This is first para";
// document.querySelector('body').append(para)
// para.classList.add("red")



// let h3= document.createElement("h3")
// h3.innerText  = "I am a blue h3!";
// document.querySelector('body').append(h3)
// h3.classList.add("blue")

// let div = document.createElement("div")
// let h1  = document.createElement("h1")
// let p = document.createElement("P")
// h1.innerText = "I am in a Div" 
// p.innerText = "ME TOO!" 
// div.append(h1);
// div.append(p)
// div.classList.add("box");
// document.querySelector("body").append(div);



// let button = document.createElement("button");
// let input  =document.createElement("input");
// button.innerText = "Click me";
// document.querySelector("body").append(input);
// document.querySelector("body").append(button);
// button.setAttribute("id", "button");
// input.setAttribute("placeholder","username");



// DOM Events

// let btns = document.querySelectorAll("button");
// for(btn of btns){ 
//    // btn.onclick = sayHello;
//    btn.addEventListener("click",sayHello);
//    btn.addEventListener("click",sayName);
// }
// function sayHello(){
//     alert("hello")
// }

// function sayName(){

//     alert("your name ")
// }
// let input = document.querySelector("input")
// input.onmouseenter=function(){ 
//     console.log("wriite")
// }


// let btn = document.querySelector("button")

// btn.addEventListener("click",function(){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;
//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
//     console.log("color updated")
// })
// function getRandomColor(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);
//     return  `rgb( ${red} ,${green} ,${blue})`;
    
// }


// let p = document.querySelector("p");
//  p.addEventListener("click",function(){
//     console.dir(this.innerText)
//     this.style.backgroundColor="blue";
//  })

// let input = document.querySelector("input");
// input.addEventListener("keydown",function(event){
//     console.log("key = ", event.key);
//     console.log("code = ",event.code)
//     console.log("key is pressed")
//     console.dir(this)
// })

// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault(); })    
    // console.dir(form)
    // let user = this.element[0];
    // let password = this.element[1];
    // console.log(user.value)
    // console.log(password.value)
    
    // let user = document.querySelector("#user");
    // user.addEventListener("changed",function(){
    //     console.log("input changed");
    //     console.log("final value = " , this.value);
    // })
    // let password= document.querySelector("#password")
    // console.log(user.value);
    // console.log(password.value);
    // alert  (`Hii ${user.value} , your password is set to be ${password.value}`);

// let inp = document.querySelector("input");
// console.dir(inp);
// console.log(inp.innertext);



//INSTEAD OF CALLIGN SAME SAME TAG SO MANY TIME WE CAN USE OUR FORM OBJECT 


let inp = document.querySelector("input")
let para = document.querySelector("p")
inp.addEventListener("input",function(){
    console.log(inp.value)
    para.innerText = inp.value
})


let url = "https://catfact.ninja/fact";
console.log(fetch(url));