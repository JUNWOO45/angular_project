class Display {
  likeNum = 15;
  clickFlag = false;
  btn = document.querySelector('#btn');
  display = document.querySelector('#display');

  constructor() {
    this.display.innerText = this.likeNum;
  }

  public clickLikeBtn() {
    this.clickFlag ? this.likeNum -= 1 : this.likeNum += 1;
    this.clickFlag = !this.clickFlag;
    this.display.innerText = this.likeNum;
  }
}


let facebook = new Display();

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  facebook.clickLikeBtn();
});
