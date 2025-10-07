// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;
// for(let i=0;i<arr.length;i++){
//    if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

let num = 287152;
let length = 0;
while(num!=0){
  num = Math.floor(num/10);
  num=num+1
}
console.log(length);

