//* here we seen the dynamic nature of the object */
// let obj = {
//     name:"shagun",
//     class:12,
//     rollno:"xxxx23"
// };
// obj.day="wednesday";
// console.log(obj);

// Lets see the cloning method 1

// let src = {
//     name:"shagun",
//     age:12,
//     rollno:"2344567**"
// }
// let dest ={...src};
// src.age=90;
// console.log("this is the source:",src);
// console.log("this is the destination:",dest);

// lets see the cloning method 2 the assigning method

// let src = {
//     name:"sandhya",
//     working: "qulacomm",
//     doing:"walking"
// }
// let src1={
//     name1 :"sapna",
//     working1:"in a big company"
// }
// let dest = Object.assign({},src,src1);
// console.log(dest);

/* lets see the last method of the object cloning called as iteration */

let src = {
    name:"sandhya",
    working: "qulacomm",
    doing:"walking"
}
let dest={}; 
for(let key in src){
    let newKey = key;
    let newValue = src[key];
    dest[newKey] = newValue;

}
console.log(dest);