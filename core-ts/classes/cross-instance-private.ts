class A {
  private x: number;
  constructor(x: number) {
    this.x = x;
  }
  changeValue(obj: A) {
    obj.x = this.x;
  }
  printX(): void {
    console.log(this.x);
  }
}

const a1 = new A(10);
const a2 = new A(20);

a1.changeValue(a2);
a2.printX();
