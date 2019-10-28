var testPoint = function (point) {
    return point.x + " + " + point.y + " point.z \uC548\uB155";
};
var data = {
    x: 10,
    y: 5,
    z: '준우'
};
testPoint(data);
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.draw = function () {
        console.log("X is " + this.x + " and Y is " + this.y);
    };
    Test.prototype.getDistance = function () {
        //  ...
    };
    return Test;
}());
var test = new Test();
test.x = 10;
test.y = 100;
test.draw();
