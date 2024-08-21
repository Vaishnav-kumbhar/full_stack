// {
//   console.log(x); //  Cannot access 'x' before initialization 
//   let x = "hello";
//   console.log(x);
// }


const n = [1,1,2,2,3,3];
const newN = n.map((e, index) => {
 let removeDuplicate = e !== index;
 return removeDuplicate;
})

console.log(newN);