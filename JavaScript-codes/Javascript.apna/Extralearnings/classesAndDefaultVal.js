// Classes , This keyword , getter and setter ***************************************************************************************************************

// class myData{
//     name = "shagun";
//     age = 21;
//     #working = "@Google";
//     ht = "160 cm";
//     #wt = 150;
//Constructor*************************************************************************
//    constructor(newName , newAge , newwt){
//     this.name = newName ;
//     this.age = newAge;
//     this.#wt =newwt;

//    }

//     walking(){
//         console.log("I Walk 2600 meter per day");
//     }
//     talking(){
//         console.log(" I can not talk that much");
//     }
//     Running(){
//         console.log("I can not run that much",this.#working);

//     }
//     get fetch(){  
//         return this.#wt;
//     }
//     set modifywt(val){
//         this.#wt = val;

//     }

// }
// let obj = new myData("Sudha", 23, 101);
// console.log("so my age is",obj.age);
// console.log("so my weight is",obj.fetch);
// obj.Running();

//Default Parameters*********************************************************

// function myData(name= "Shagun Pundir" ,age=23){
//     console.log("My name is ",name );
//     console.log("My age is: ",age);
// }
// myData("Radha");

// Assignment of a function as a Default value ***************************

// function myAge(){
//     return 120;
// }
// function name(name = "shagun" ,age=myAge()){
//     console.log("My name is ",name,"and age is ",age);
// }
// name();
let arr=[2,3,4,5,6,7,8,9];
let myAns = arr.map((number)=>{
    let table=[];
for(let i =1;i<=10;i++){
   table.push(i*number);
}
return table;});
console.log(myAns);






