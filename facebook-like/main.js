var Display = /** @class */ (function () {
    function Display() {
        this.likeNum = 15;
        this.clickFlag = false;
        this.btn = document.querySelector('#btn');
        this.display = document.querySelector('#display');
        this.display.innerText = this.likeNum;
    }
    Display.prototype.clickLikeBtn = function () {
        this.clickFlag ? this.likeNum -= 1 : this.likeNum += 1;
        this.clickFlag = !this.clickFlag;
        this.display.innerText = this.likeNum;
    };
    return Display;
}());
var facebook = new Display();
var btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
    facebook.clickLikeBtn();
});
