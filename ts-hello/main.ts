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
