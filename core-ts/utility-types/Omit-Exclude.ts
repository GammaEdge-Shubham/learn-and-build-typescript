interface Profile {
  name: string;
  photo: string;
  followers: number;
}

const edit: Omit<Profile, "followers"> = {
  name: "Krishna",
  photo: "",
};

console.log(edit);

type Shape =
  | { kind: "circle"; redius: number }
  | { kind: "triangle"; x: number; y: number; z: number }
  | { kind: "square"; x: number; y: number };

const shape: Exclude<Shape, { kind: "circle"; redius: number }> = {
  kind: "triangle",
  x: 20,
  y: 30,
  z: 40,
};
