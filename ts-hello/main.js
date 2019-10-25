var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4, 5];
var f = ['a', 1, 23, 4, true];
var g = ['a', 1, 2, 3, 4, undefined, false];
var ColorRed = 1;
var ColorBlue = 2;
var ColorGreen = 3;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
