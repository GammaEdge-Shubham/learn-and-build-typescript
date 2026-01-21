class Base {
  #value: number;
  constructor(value: number) {
    this.#value = value;
  }
  printValue() {
    console.log(`Value is: ${this.#value}`);
  }
}

class Child extends Base {
  constructor(value: number) {
    super(value);
  }
}

const c1 = new Child(20);

c1.printValue();
