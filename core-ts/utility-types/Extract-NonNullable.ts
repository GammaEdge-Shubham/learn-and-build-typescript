const message: Extract<string, string | number> = "Abhishek";

type Message =
  | { msg: string; url: string; hiddenMessage: string }
  | { msg: string; url: string }
  | { msg: string };

let msg: Extract<Message, { msg: string; url: string }> = {
  msg: "Something",
  url: "some url",
};

// NonNullable

let names: NonNullable<string | string[] | undefined> = ["Abhishek", "Rohan"];
names = "Shubham";

let some: NonNullable<undefined | null>; // this will never take any value
