// To handle error in any code what we frequently used is try -catch block

try{
    console.log("try block stsrts from here")
    console.log(x);
}
catch(e){
  console.log("i am inside catch")  ;
  console.log("your erroe is here",e)
  throw new Error ("dekh la bhondu");//use throw keyword for customize error mssg
}
finally{
console.log("i will run everytime");
}


// this will run everytime if there is error or not 
/*/FINALLY***************************/
// try{

// }
// catch(e){

// }
// finally{
// console.log("i will run everytime");
// }

//*******if i want to throw or  propagate any error than i use THROW*********/



