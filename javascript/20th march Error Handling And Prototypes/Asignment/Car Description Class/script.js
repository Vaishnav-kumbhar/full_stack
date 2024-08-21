class Car {
  // Member function
  constructor(c, m, y) {
    this.company = c;
    this.model = m;
    this.year = y;
  }

  getDiscription() {
    console.log(`this is a ${this.year} ${this.company} ${this.model}`);
  }
}

const car = new Car("Mahindra", "xuv 7oo", 2023);
car.getDiscription();

