function getPerson(name, age) {
  try {
    this.name = name;
    this.age = age;
    this.height = height;
    console.log(`name: ${name}, Age: ${age} , height: ${height}`);
  } catch (err) {
    console.log("invalid parameter type", err);
  }
}

const person = {
  name: "vaishnav",
  age: 99,
};

getPerson(person.name , person.age);
