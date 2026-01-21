type UserType = "buyer" | "admin" | "seller";

interface User {
  id: number;
  name: string;
  userName: string;
  password: string;
  role: UserType;
  printUserDetails: () => void;
}

class Seller implements User {
  id: number;
  name: string;
  userName: string;
  password: string;
  role: UserType;

  constructor(id: number, name: string, userName: string, password: string) {
    this.id = id;
    this.name = name;
    this.userName = userName;
    this.password = password;
    this.role = "seller";
  }
  printUserDetails() {
    console.log(
      `User Details
        ID: ${this.id},
        Name: ${this.name},
        username: ${this.userName},
        password: ${this.password},
        role: ${this.role}
        `,
    );
  }
}

const s1 = new Seller(1, "Abhi", "abhi123", "Abhi@112");
s1.printUserDetails();
