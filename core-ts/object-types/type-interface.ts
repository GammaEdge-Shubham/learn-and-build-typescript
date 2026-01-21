type P = {
  id: number;
  name: string;
  age: number;
  gender: "M" | "F"; // We can union two or more literals using union operator (|) or we can create another type
};

const p1: P = {
  id: 1,
  name: "Aarti",
  age: 23,
  gender: "F",
};

// type Q extends P = {

// }
// type dose not allow inhertance

interface R {
  name: string;
  age: number;
}

interface Q extends R {
  address: string;
}

const p2: R = {
  name: "Mohan",
  age: 10,
  // in this we can't put address because in R interface there is no property name as address
};

const p3: Q = {
  name: "Krishna",
  age: 12,
  address: "Vrindavan", // now it allow address, because p3 is Q type and address is available
};

// it ensures that address will be optional
const p4: R | Q = {
  name: "Radha",
  age: 11,
};

// or we can also achieve this by using ?

interface S {
  name: string;
  age: number;
  address?: string;
}

const p5: S = {
  name: "Alice",
  age: 19,
  // if we need then we can put address also
};
