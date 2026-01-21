class GetterSetter {
  // ! definite initializer when propertise are not initialized by construtor
  // if we are not using this then ts gives us error showing that
  // '_price' has no initializer and is not definitely assigned
  #_name!: string;
  #_price!: number;

  set name(value: string) {
    this.#_name = value;
  }

  get name() {
    return this.#_name;
  }

  set price(value: number) {
    this.#_price = value;
  }

  get price() {
    return this.#_price;
  }
}

const g1 = new GetterSetter();
console.log(g1.name); // it will give undefined because it is not initialized
g1.name = "Alice";
g1.price = 200;
console.log(g1.name);
