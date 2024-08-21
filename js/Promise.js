// const newP1 = new Promise((resolve, reject) => {
//      setTimeout( function() {
//         console.log("Prmoise first");
//         let rej = false;
//         if (rej) {
//            reject("something went wrong");
//         } else {
//          resolve({userName: "vaishnav", age: 99});
//         }
        
//      }, 1000)
// })
// console.log("hey! i am global");
// newP1.then(function(user) {
//  console.log(user);
//  return user.userName;
// }).then((user_name) => {
//   console.log(user_name)
// }).catch((value) => {
//     console.log(value)
// })

// async function promise() {
//     let Response = await newP1
//     console.log(Response);
// }

// promise();

fetch('https://github.com/Vaishnav-kumbhar').then((response) => response.json()).then((data) => {
  console.log(data);
}).catch((err) => {
    console.log(err);
})
