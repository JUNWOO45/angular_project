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
  x: number;
  y: number;
  z: string;

  constructor(x?: number, y?: number, z?: string) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  draw() {
    console.log(`X is ${this.x} and Y is ${this.y} AND MY NAME IS ${this.z}`);
  }

  getDistance() {
    //  ...
  }
}

let test = new Test();
test.draw();
