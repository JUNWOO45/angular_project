interface Point {
  x: number,
  y: number,
  z: string
}

const testPoint = (point: Point) => {
  return `${point.x} + ${point.y} point.z 안녕`;
}

const data: Point = {
  x: 10,
  y: 5,
  z: '준우'
};

testPoint(data);

class Test {
  constructor(private x?: number, private y?: number, private z?: string) {
  }

  public draw() {
    console.log(`X is ${this.x} and Y is ${this.y} AND MY NAME IS ${this.z}`);
  }

  public getDistance() {
    //  ...
  }
}

let test = new Test(2, 4, '준우');
test.draw();
