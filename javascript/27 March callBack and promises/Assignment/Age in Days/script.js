function ageInDays(personObject, callback) {
  let fullName = `${personObject.firstname} ${personObject.lastname}`;
  let age = personObject.age * 360;
  callback(fullName, age);
}

const callback = (fullName, age) => {
  console.log(
    `The preson full name is ${fullName}, and their age in days ${age}`
  );
};
const person = {
  firstname: "Vaishnav",
  lastname: "Kumbhar",
  age: 50,
};
ageInDays(person, callback);
