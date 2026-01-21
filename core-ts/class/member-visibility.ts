class Greeter {
  public sayHello(): void {
    console.log("Hello");
  }
  protected sayBye(): void {
    console.log("Bye");
  }
}

const g = new Greeter();
g.sayHello();
//g.sayBye(); // this is not allowed for protected members because they are only accessible within the class or derrived class

class Bye extends Greeter {
  sayBye() {
    super.sayBye(); // here we can access it
  }
}

const g3 = new Bye();
g3.sayHello();
g3.sayBye();

class Base1 {
  protected name: string = "Some";
}

class Sib1 extends Base1 {
  protected name: string = "How";
}

class Sib2 extends Base1 {
  changeName1(obj: Sib2) {
    obj.name = "Changed";
  }
  changeName2(obj: Sib1) {
    //obj.name = "Changed"; // Not accessible
  }
}

// public -> we can access members from anywhere
// protected -> only accessible from same or subclasses
// private -> accessible only from the same class
