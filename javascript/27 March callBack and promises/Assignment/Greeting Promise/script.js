function greetinPromise(name) {
 return new Promise((resolve, reject) => {
     resolve(`${name}!`);
 })
}

const promise = greetinPromise("Vaishnav");
promise.then((value) => {
  console.log("hello", value);
})