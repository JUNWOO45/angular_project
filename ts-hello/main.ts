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

  draw() {
    console.log(`X is ${this.x} and Y is ${this.y}`);
  }

  getDistance() {
    //  ...
  }
}

let test = new Test();
test.x = 10;
test.y = 100;
test.draw();
