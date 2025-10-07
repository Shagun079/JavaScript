const max = prompt("enter the max number");

const random= Math.floor(Math.random()*max)+1;
console.log(random);
let user =prompt("enter the number to match");

while(true){
    if(user=="quit"){
        console.log("quit");
        break;
    }
    if(user==random){
        console.log("yes! you ar right");
        break;
    }else if(user>random){
       user= prompt("your number is way larger than  random number try! again");
    }
    else if(user<random){
        user=prompt("your number is way smaller than random number try ! again");
    }
    
}