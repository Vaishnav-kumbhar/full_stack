class Person {
  name;
  age;

  constructor(name = "unknown", age = 0) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    console.log(`name: ${this.name}, Age: ${this.age}`);
  }
}

const Ritik = new Person("Ritik", 25);
Ritik.getDetails();
// expected output: name: Ritik, Age: 25;
const empty = new Person();
empty.getDetails();
// expected output: name: unknown, Age: 0;
