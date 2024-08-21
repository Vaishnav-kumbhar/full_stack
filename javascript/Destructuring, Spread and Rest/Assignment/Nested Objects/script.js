const person = {
  name: "Mithun",
  age: 21,
  address: {
    street: "b8, block B, Industrial Area",
    city: "Sector 62, Noida",
    state: "uttar Pradesh",
  },
};

// destructuring Object
function extract() {
  const {
    name,
    address: { street },
  } = person;
  console.log(name, street);
}

extract();
