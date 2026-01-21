interface Person {
  readonly name: string;
  readonly age: number;
}

interface WriteablePerson {
  name: string;
  age: number;
}

let writeablePerson: WriteablePerson = {
  name: "Alice",
  age: 23,
};

let readonlyPerson: Person = writeablePerson;

console.log(readonlyPerson.age);
writeablePerson.age++; // the updated age will be reflected because it shares same memory with diff accessibility power
console.log(readonlyPerson.age);
//readonlyPerson.age++; // it will give error because this reference does not allow modifications
console.log(readonlyPerson.age);
