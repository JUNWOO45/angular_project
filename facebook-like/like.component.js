"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_likeCount, _isSelected) {
        this._likeCount = _likeCount;
        this._isSelected = _isSelected;
    }
    LikeComponent.prototype.onClick = function () {
        this._isSelected ? this._likeCount-- : this._likeCount++;
        this._isSelected = !this._isSelected;
    };
    Object.defineProperty(LikeComponent.prototype, "likeCount", {
        get: function () {
            return this._likeCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
