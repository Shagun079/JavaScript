
// Coverting JSON object to String***********************************************************************************************************************************

// let fact = '{"fact":"Cats can predict earthquakes. We humans are not 100% sure how they do it. There are several different theories.","length":111}'
//  let parse = JSON.parse(fact);
//  console.log(parse.fact);


 // JS OBJ to JSON obj ************************************************************************************************************************************************
 
//  let obj ={
//     fact:"Cats can predict earthquakes. We humans are not 100% sure how they do it. There are several different theories.",
//      length: 111

//  }
//  let sample = JSON.stringify(obj)
// console.log(sample)



/************************************************************************************************************************************************************** */
/*                             FETCHING DATA FROM THE API USING ASYNC AND AWAIT                                                                                                                                             */




// let url = "https://catfact.ninja/fact";

// async function getData(){
//     try{
//  let res = await fetch(url);
//  let data = await res.json();
//  console.log(data.fact);
// }
// catch(err){
// console.log(err)
// }
// }

/*********************************************************************************************************************************************** */
/*                                      FETCHING DATA FROM THE API USING AXIOS                (IT IS A LIBRARY)                                                       */

let h = document.querySelector("h1");
h.style.color = "red";
let button  = document.querySelector("#button");
let p = document.querySelector("#fact");

let url = "https://catfact.ninja/fact";

button.addEventListener("click",async function(){
    try{
        let res = await axios.get(url);
        console.log(res.data.fact);
        p.innerText = res.data.fact;

    }
    catch (e){
        console.log(e,"Error")
    }
}
)

let url2="https://dog.ceo/api/breeds/image/random"

let button2 = document.querySelector("#button2");
let img = document.querySelector("#img");

button2.addEventListener("click",async function(){
    try{
    
        let res = await axios.get(url2);
        console.log(res.data.message);
        img.src = res.data.message;
    
    }
    catch(e){
        console.log(e)
    }
} )

let url3 = "https://icanhazdadjoke.com/"

async function jokes(){
    try{
        const config = {headers:{Accept:"application/json"}};
    let res = await axios.get(url3,config)
    console.log(res.data)
    }
    catch(e){
        console.log(e)
    }
}



