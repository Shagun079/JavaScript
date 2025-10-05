let gameSeq=[];
let userSeq=[];

let btns = ["yellow","blue","purple","green"];

let started  = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is stared");
        started=true;
    }
    levelUp();
});


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}


function levelUp(){
    userSeq = [];
    level++; 
    h2.innerText = `level ${level}`;

   let randomIdx = Math.floor(Math.random()*4)
   let randomClr = btns[randomIdx];
   let randomBtn = document.querySelector(`.${randomClr}`)
    // console.log(randomBtn);
    // console.log(randomIdx);
    // console.log(randomClr);

    gameSeq.push(randomClr);
    console.log(gameSeq);
    gameFlash(randomBtn);

} 

function checkAns(idx){
    // console.log("curr level : " , level)
    // let idx = level - 1;
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length ==gameSeq.length){
           setTimeout(levelUp , 1000);
        }
    }else{
        h2.innerHTML = `Game Over!your score was <b>${level}</b> <br> Press any key to start.`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },2000)
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);
   
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    console.log(userSeq);


}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);

}
 function reset(){
    started =false;
    gameSeq = [];
    userSeq =[];
    level = 0;
 }


