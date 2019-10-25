function log(msg) {
  console.log('msg : ', msg);
}

const message = 'Hello world';

log(message);

function doSomething() {
  for(let i = 0; i < 5; i++) {
      console.log(i);
  }

  console.log('finally : ', i);
}

doSomething();
