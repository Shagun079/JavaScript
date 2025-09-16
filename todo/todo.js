let todo=[];
let req= prompt("enter your requested items of the list ");
while(true)
{
    if(req=="quit"){
        console.log("quiting the app");
        break;
    }
    if(req=="list"){
        console.log("-----------------");
        for( let task of todo){
            console.log(task);
        }
        console.log("------------------");
    
    }else if(req=="add"){
       let task= prompt("please enter you task ");
        todo.push(task);
        console.log("task added",task);
    }else{
        console.log("invalid command . please type add , lsit or quit");
    }
    req=prompt("enter your request item for the list");
    
}
