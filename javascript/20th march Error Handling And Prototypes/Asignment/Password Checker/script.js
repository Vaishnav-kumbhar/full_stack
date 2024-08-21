class User {
  // Data Member
  #password;

  constructor(u) {
    this.username = u;
  }

  set Password(p) {
    if (p.length === 8 && p.match(/[0-9]/) && p.match(/[A-Z]/)) {
      this.#password = p;
    } else {
      console.log(
        `password must be at least 8 character long and contain at least one number and one uppercase letter`
      );
    }
  }

  get getPassword() {
    const astrick = this.#password.replace(this.#password, "********");
    console.log(`username is:${this.username} and password is ${astrick}`);
  }
}

const user1 = new User("Vaishnav");
user1.Password = "Raipur78";
user1.getPassword;
