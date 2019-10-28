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
    function Test(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Test.prototype.draw = function () {
        console.log("X is " + this.x + " and Y is " + this.y + " AND MY NAME IS " + this.z);
    };
    Test.prototype.getDistance = function () {
        //  ...
    };
    return Test;
}());
var test = new Test(2, 4, '준우');
test.x = 1000;
test.draw();
