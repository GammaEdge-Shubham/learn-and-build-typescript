interface Points {
  x?: number;
  y?: number;
}

const p1: Points = {
  x: 10,
};

const p2: Required<Points> = {
  x: 10,
  y: 10,
};

p2.x = 20;

// we can't skip any optional value and after that we can't modify it
const p3: Readonly<Required<Points>> = {
  x: 23,
  y: 24,
};
// p3.x = 40; // error
