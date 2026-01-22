function printString(message: string, characters: string): void {
  console.log(`Passed message is: ${message}
    passed characters is: ${characters}`);
}

const str: Parameters<typeof printString> = [
  "Some message to print",
  "Some random characters",
];

printString(...str);

// ConstructorParameters<Type>
class C {
  #obj: { a: string; b: string };
  constructor(obj: { a: string; b: string }) {
    this.#obj = obj;
  }
}

type D = ConstructorParameters<typeof C>;

const consType: D = [
  {
    a: "Abhishek",
    b: "someOne",
  },
];

let tuple: [string, number] = ["1", 2]; // tuple with predefined data types
