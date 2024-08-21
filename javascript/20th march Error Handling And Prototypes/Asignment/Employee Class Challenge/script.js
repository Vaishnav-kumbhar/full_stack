class Employee {
 #salary;
  constructor(n, p, s) {
    this.name = n;
    this.postion = p;
    this.#salary = s;
  }
 
  get salaryGetter() {
    console.log(this.#salary);
  }
   set salarySetter(s){
     if (s <= 1000) return;
     this.#salary = s;
   }

   getSalary() {
    console.log(this.#salary);
   }

}

const emply1 = new Employee("Vaishnav", "software Engineer", 80000);
emply1.getSalary();